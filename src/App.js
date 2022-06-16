import React, { useEffect, useState } from 'react'
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer'

//This is for accessing spotify web api
const spotify = new SpotifyWebApi()
function App() {

  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";
  
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token); // connecting spotify with our app
      spotify.getMe().then((user) => {
        console.log('user', user)
      });
    }
    console.log("I have a token", token);
  }, [])

  return (
    <div className="App">
      {
        token ? (
          <Player />
        ) : (<Login />)
      }
    </div>
  );
}

export default App;

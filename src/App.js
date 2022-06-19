import React, { useEffect, useState } from 'react'
import './App.css';
import Login from './Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player/Player';
import { useDataLayerValue } from './DataLayer'

//This is for accessing spotify web api
const spotify = new SpotifyWebApi()
function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token); // connecting spotify with our app
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {

        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXbLZ52XmnySJg').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })

    };
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

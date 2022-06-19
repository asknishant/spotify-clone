import React from 'react'
import '../Sidebar/Sidebar.css'
import { SidebarOption } from '../components/SidebarOption'
import { Home, Search, LibraryMusic } from '@mui/icons-material'
import { useDataLayerValue } from '../DataLayer'

const Sidebar = () => {

    const [{ playlists }, dispatch] = useDataLayerValue();

   return (
    <div className='sidebar'>
        <img className='sidebar_logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>
        <SidebarOption Icon={Home} title="Home" />
        <SidebarOption Icon={Search} title="Search"/ >
        <SidebarOption Icon={LibraryMusic} title="Your Library" / >
        <br/>
        <strong className='sidebar_title'>PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name}/> 
        ))}
    </div>
  )
}

export default Sidebar

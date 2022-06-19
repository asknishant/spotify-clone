import React from 'react'
import './Body.css'
import { useDataLayerValue } from '../DataLayer'
import Header from '../Header/Header'
import { PlayCircleFilled, Favorite, MoreHoriz } from '@mui/icons-material'
import SongRow from '../components/SongRow'

export const Body = ({ spotify }) => {

    const [{ user, discover_weekly }, dispatch] = useDataLayerValue();
    { console.log('discover weekly is here', discover_weekly) }
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className='body_info'>
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className='body_infoText'>
                    <strong>PLAYLIST</strong>
                    <h1>{discover_weekly ? discover_weekly?.name : 'DISCOVER weekly'}</h1>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleFilled className='body_shuffle' />
                    <Favorite fontSize='large' />
                    <MoreHoriz />
                </div>
            </div>
            <div>
                <h2 style={{marginLeft: 40}}>#title</h2>
            </div>
            <div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
import React from 'react'
import './Footer.css'
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown} from '@mui/icons-material'
import { Grid, Slider } from '@mui/material'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_left'>
          <img className='footer_albumLogo' src='https://images.hindustantimes.com/img/2022/05/29/400x225/Sidhu_Moosewala_1653831031508_1653831046138.jpg' alt=''></img>
          <div className='footer_songInfo'>
            <h4>Siddhu</h4>
            <p>295</p>
          </div>
        </div>
        <div className='footer_center'>
            <Shuffle className='footer_green'></Shuffle>
            <SkipPrevious className='footer_icon'></SkipPrevious>
            <PlayCircleOutline fontSize='large' className='footer_icon'></PlayCircleOutline>
            <SkipNext className='footer_icon'></SkipNext>
            <Repeat className='footer_green'></Repeat>
        </div>
        <div className='footer_right'>
            <Grid container_spacing={2} className="grid">
                <Grid item>
                    <PlaylistPlay item/>
                </Grid>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider/>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

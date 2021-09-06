import React from "react";
import ReactPlayer from "react-player";
import "assets/css/ResponsivePlayer.css"

export default function ResponsivePlayer() {
    
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=bf0iO9KBvRQ'
            width='80%'
            height='80%'
          />
        </div>
      )
    
  }
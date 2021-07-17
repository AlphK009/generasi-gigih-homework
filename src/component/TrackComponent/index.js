import React from 'react';
//import Image from '../image';
import './TrackComponent.css'

const TrackComponent = (props) => {
    return (
        <div className="track-wrap">
            <div className="img-track">
                <img src={props.url} alt="album"></img>
               {/*  <Image/> */}
            </div>
            <div className="track-content">
                <label className="song-title">{props.title}</label>
                <label className="song-singer">{props.singer}</label>
                <label className="song-album">{props.album}</label>
            </div>
        </div>
    )
}
export default TrackComponent;
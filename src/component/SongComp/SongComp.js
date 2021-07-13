import React, { Fragment } from 'react';
import data from '../../sample';


const SongComp = () => {
    return(
        <Fragment>
        <div className="song-wrapper">
            <div className="imgSong">
        <img className="image" src={data.album.images[0].url} alt="song"></img>
        </div>
        <div className="content-wrapper">
        <label className="title" >{data.name}</label>
        <label className="singer">{data.artists[0].name}</label>
        <label className="album">{data.album.name}</label>
        <button className="update"> Select </button>
        </div>
        </div>
        </Fragment>
        
    )
}
export default SongComp; 
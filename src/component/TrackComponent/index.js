import React from 'react';
import AlbumName from '../Album';
import ArtistName from '../Artists';
import ButtonSelect from '../ButtonSelect';
import ImageComponent from '../image';
import SongTitle from '../Title';
import './TrackComponent.css'
const TrackComponent = (props) => {
    return (
        <div className="track-wrap">
            <div className="img-track">
             <ImageComponent images={props.url} alt={props.alte}/>
            </div>
            <div className="track-content">
                <SongTitle title={props.songtitle}/>
                <ArtistName artists={props.artistsName}/>
                <AlbumName album = {props.albumName}/>
               <ButtonSelect button={props.buttonName}/>
            </div>
        </div>

    )
}
export default TrackComponent;


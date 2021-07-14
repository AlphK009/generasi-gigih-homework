import React from 'react';
import data from '../../sample';
import AlbumName from '../Album';
import ArtistName from '../Artists';
import ButtonSelect from '../ButtonSelect';
import ImageComponent from '../image';
import SongTitle from '../Title';


const SongComponent = () => {
    return(
         <div className="song-wrapper">
            <div className="img-song">
        <ImageComponent images={data.album.images[0].url}/>
        </div>
        <div className="content-wrapper">
        <SongTitle title={data.name}/>
        <ArtistName artists = {data.album.artists[0].name}/>
        <AlbumName album = {data.album.name}/>
        <ButtonSelect/>
        </div>
        </div>
   
    )
}
export default SongComponent; 
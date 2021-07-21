import React, { Component, useState } from "react";
import TrackComponent from "../TrackComponent";

class Playlist extends Component {
   state={
       result = null,
       search = ""
   }
   
    getSearchResult = () => {
        fetch(`https://api.spotify.com/v1/search?q=${search}&type=track`, {
          headers: { Authorization: "Bearer " + props.params.access_token },
        })
          .then((response) => response.json())
          .then((response) => setResult(response.tracks));
      };
    }
    render()
    {return(
        <>
        <h1 style={{ textAlign: "center" }}>Playlist Search</h1>
        <div className="row-center">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="input-text"
            type="text"
            name="search"
          />
          <button
            onClick={() => getSearchResult()}
            className="search-button"
            type="button"
          >
            Search
          </button>
        </div>
        {result ? (
          <>
            <h3 style={{ textAlign: "center" }}>
              Showing {result.items.length} tracks
            </h3>
            {result.items.map((track, i) => {
              return (
                <TrackComponent
                  key={i}
                  height={track.album.images[0].height}
                  imgUrl={track.album.images[0].url}
                  title={track.name}
                  artistName={track.artists[0].name}
                  albumName={track.album.name}
                />
              );
            })}
          </>
        ) : (
          <h3 style={{ textAlign: "center" }}>No Tracks Show</h3>
        )}
      </>
    )}

export default Playlist;
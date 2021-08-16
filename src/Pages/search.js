import React, { useState, useEffect } from "react";
import TrackComponent from "../component/TrackComponent";

const CLIENT_ID = "90854bc987c9461e9cd252b793092d34";
const SPOTIFY_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL = "http://localhost:3000";
const SCOPES = "playlist-modify-private";

const Search = () => {
  const [authInfo, setAuthInfo] = useState({ isAuth: false });
  const [tracks, setTracks] = useState("");
  const [search, setSearch] = useState("");
  const getReturnedParams = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsUrl = stringAfterHashtag.split("&");
    const paramsSplit = paramsUrl.reduce((acc, currentValue) => {
      const [key, value] = currentValue.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return paramsSplit;
  };

  const handleSearch = async (query) => {
    const SEARCH_API_ENDPOINT = `https://api.spotify.com/v1/search`;
    const SEARCH_TYPE = `track`;
    const res = await fetch(
      `${SEARCH_API_ENDPOINT}?q=${query}&type=${SEARCH_TYPE}&limit=12`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + authInfo.access_token,
        },
      }
    ).then((res) => res.json());
    console.log(res.tracks.items);
    setTracks(res.tracks.items);
  };
  const handleLogin = () => {
    window.location = `${SPOTIFY_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES}&response_type=token&show_dialog=true`;
  };

  useEffect(() => {
    if (window.location.hash) {
      const newAuthInfo = {
        isAuth: true,
        ...getReturnedParams(window.location.hash),
      };
      setAuthInfo(newAuthInfo);
    }
  }, []);

  return authInfo.isAuth ? (
    <div>
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
        onClick={() => handleSearch(search)}
        className="search-button"
        type="button"
      >
        Search
      </button>

      {tracks &&
        tracks.map((track) => {
          return (
            <TrackComponent
              key={track.id}
              url={track.album.images[0].url}
              songtitle={track.name}
              artistsName={track.artists[0].name}
              albumName={track.album.name}
              buttonName="select"
            />
          );
        })}
    </div>
  ) : (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Search;

// import axios from 'axios';
// import React, { Component } from 'react';

// class Login extends Component {
//     state = 
  
//     getLoginAuth = () => {
//         axios.get(`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_AUTHORIZE_ENDPOINT}&scope=playlist-modify-private&state=123`)
//     }
   
//     render (){
//         return(
//             <div>
//                 <button className="btn-login">Login</button>
//             </div>
//         )
//     }
// }
// export default Login;
import React, { useEffect } from "react";


const CLIENT_ID = "90854bc987c9461e9cd252b793092d34"; // insert your client id here from spotify
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000";
const SPACE_DELIMITER = "%20";
const SCOPES = [
  "playlist-modify-private"
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

/* 
http://localhost:3000/webapp#access_token=ABCqxL4Y&token_type=Bearer&expires_in=3600
*/
const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};

const WebApp = () => {
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });

  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="container">
      <button onClick={handleLogin}>login to spotify</button>
    </div>
  );
};

export default WebApp;
import logo from './logo.svg';
import './App.css';
import WebApp from './component/Login';
import Playlist from './component/Search';
import { useState } from "react";


function App() {
  const [isLogin, setIsLogin] = useState({ status: false, params: {} });
  const getAccessToken = (params) => {
    if (params?.access_token) {
      setIsLogin({ status: true, params: params });
    }
  };

  return isLogin.status ? (
    <Playlist params={isLogin.params} />
  ) : (
    <WebApp onLogin={getAccessToken} />
  );
}

export default App;

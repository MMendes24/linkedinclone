import React from 'react';
import './App.css';

import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        {/*header*/}
        <Header />
        {/*App Body*/}
        <div className="appBody">
          <Sidebar />
          <Feed />
        </div>
        {/*Sidebar*/}
        {/*Feed*/}
        {/*Widgets*/}
      </header>
    </div>
  );
}

export default App;

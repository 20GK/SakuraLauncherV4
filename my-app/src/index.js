import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
const { ipcRenderer } = window.require('@electron/remote')

//Components
import HeaderApp   from './components/HeaderApp.jsx';
import SideBar     from './components/SideBar.jsx';
import AccountCard from './components/AccountCard.jsx';
//--pages
import { MainPage } from './Pages/MainPage.jsx';
import { ServersPage } from './Pages/ServersPage.jsx';
import { NotFoundPage } from './Pages/NotFoundPage.jsx';

//Styles
import './styles/App.scss';

let [message, setMessage] = useState()

ipcRenderer.on('asynchronous-message', function(evt, message) {
  console.log(message)
  setMessage('CHECK UPDATES')
})

const updater = ReactDOM.createRoot(document.getElementById('root-updater'));
updater.render(
  <React.StrictMode>
    <h1>{message}</h1>
  </React.StrictMode>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className='mainView'>
          <HeaderApp/>
            <div className='content'>
              <HashRouter>
                <SideBar/>
                <div className='PageView'>
                  <Routes>
                    <Route exact path="/" element={<ServersPage/>}/>
                    <Route path="/servers" element={<MainPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                  </Routes>
                </div>
                <AccountCard/>
              </HashRouter>
            </div>
        </div>
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

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
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route path="/servers" element={<ServersPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                  </Routes>
                </div>
                <AccountCard/>
              </HashRouter>
            </div>
        </div>
  </React.StrictMode>
);

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
  module.hot.accept();
};
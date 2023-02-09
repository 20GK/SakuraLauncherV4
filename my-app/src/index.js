import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

//Components
import HeaderApp   from './components/HeaderApp.jsx';
import SideBar   from './components/SideBar.jsx';
import AccountCard   from './components/AccountCard.jsx';

//--pages
import MainContent   from './components/pages/MainContent.jsx';

//Styles
import './styles/App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <HeaderApp/>
        <div className='mainView'>
          <div className='left-content'>
            <SideBar/>
            <AccountCard/>
          </div>
          <HashRouter>
            <Routes>
              <Route exact path='/' element={<MainContent/>}/>
              <Route path='/' element={<MainContent/>}/>
              <Route path='/' element={<MainContent/>}/>
            </Routes>
          </HashRouter>
        </div>
  </React.StrictMode>
);
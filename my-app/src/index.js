import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

//Components
import HeaderApp   from './components/HeaderApp.jsx';

//--pages

//Styles
import './styles/App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className='mainView'>
          <HeaderApp/>
            <div className='content'>
              <HashRouter>
                {/* <SideBar/> */}
                <div className='PageView'>
                  <Routes>

                  </Routes>
                </div>
              </HashRouter>
            </div>
        </div>
  </React.StrictMode>
);
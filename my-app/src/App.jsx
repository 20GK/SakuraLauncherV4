//Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Components
import HeaderApp   from './App/components/HeaderApp.jsx'
import SideBar     from './App/components/SideBar.jsx'
import AccountCard from './App/components/AccountCard.jsx'
import ServersGrid from './App/components/ServersGrid.jsx'
//--pages
import { MainPage } from './App/Pages/MainPage.jsx'
import { ServersPage } from './App/Pages/ServersPage.jsx'
import { NotFoundPage } from './App/Pages/NotFoundPage.jsx'

//Styles
import './App.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='mainView'>
      <HeaderApp/>
        <div className='content'>
          <BrowserRouter>
            <SideBar/>
            <div className='PageView'>
              <Routes>
                <Route exact path="/servers" element={<ServersPage/>}/>
                <Route exact path="*" element={<NotFoundPage/>}/>
                <Route exact path="/" element={<MainPage/>}/>
              </Routes>
            </div>
            <AccountCard/>
          </BrowserRouter>
        </div>
    </div>
  </React.StrictMode>
)
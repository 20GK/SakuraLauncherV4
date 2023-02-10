import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

//Components
import HeaderApp   from './components/HeaderApp.jsx';

//--pages
import MainContent   from './pages/MainContent.jsx';

//Styles
import './styles/App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <HeaderApp/>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<MainContent/>}/>
          <Route path='/' element={<MainContent/>}/>
          <Route path='/' element={<MainContent/>}/>
        </Routes>
      </HashRouter>
  </React.StrictMode>
);
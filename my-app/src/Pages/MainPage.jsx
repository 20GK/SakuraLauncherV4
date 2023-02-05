import React from 'react';
const electron = window.require('electron')
const getVersionApp = electron.app.getVersion()

const MainPage = () => {
  return (
    <h1>{getVersionApp}</h1>
  );
};

export {MainPage};
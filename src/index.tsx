import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from './pages/home';
import Blog from './pages/blog';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/blog' Component={Blog}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
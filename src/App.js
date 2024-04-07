import './App.css?after';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './elements/Sidebar';

import {
  Main, HangulRomacaPyenhwanki
}
from './importPages';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/hangul-romaca-pyenhwanki' element={<HangulRomacaPyenhwanki />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

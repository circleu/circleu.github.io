import './App.css?after';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './elements/Sidebar';

import {
  Main, HangulRomacaPyenhwanki, _404
}
from './importPages';


function App() {
  return (
    <div>
      <HashRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/hangul-romaca-pyenhwanki' element={<HangulRomacaPyenhwanki />}></Route>
          <Route path='*' element={<_404 />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

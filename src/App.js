import "./App.css?after";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./elements/Sidebar";

import * as Pages from  "./importPages";


function App() {
  return (
    <div>
      <HashRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Pages.Main />}></Route>
          <Route path="*" element={<Pages._404 />}></Route>
          <Route path="/operating-system/64-bit-os-using-uefi/0" element={<Pages._64BitOSUsingUEFI0 />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

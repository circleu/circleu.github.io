import "./App.css?after";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./elements/Sidebar";

import * as Pages from  "./importPages";


function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Pages.Main />}></Route>
          <Route path="*" element={<Pages._404 />}></Route>
          <Route path="/operating-system/64-bit-os-using-uefi/0" element={<Pages._64BitOSUsingUEFI0 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

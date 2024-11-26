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
          <Route path="/" element={<Pages.Main.page />}></Route>
          <Route path="*" element={<Pages._404.page />}></Route>
          <Route path="/development/c/operating-system/64-bit-os-using-uefi/0" element={<Pages._64BitOSUsingUEFI0.page />}></Route>
          <Route path="/development/c/tools/c-code-highlighter" element={<Pages.CCodeHighlighter.page />}></Route>
          <Route path="/development" element={<Pages.Development.page />}></Route>
          <Route path="/development/c" element={<Pages.C.page />}></Route>
          <Route path="/development/c/tools" element={<Pages.Tools.page />}></Route>
          <Route path="/development/c/operating-system" element={<Pages.OperatingSystem.page />}></Route>
          <Route path="/development/c/operating-system/64-bit-os-using-uefi" element={<Pages._64BitOSUsingUEFI.page />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

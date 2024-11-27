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

          <Route path={Pages._64BitOSUsingUEFI0.data.dir} element={<Pages._64BitOSUsingUEFI0.page />}></Route>
          <Route path={Pages.CCodeHighlighter.data.dir} element={<Pages.CCodeHighlighter.page />}></Route>
          <Route path={Pages.Development.data.dir} element={<Pages.Development.page />}></Route>
          <Route path={Pages.C.data.dir} element={<Pages.C.page />}></Route>
          <Route path={Pages.Tools.data.dir} element={<Pages.Tools.page />}></Route>
          <Route path={Pages.OperatingSystem.data.dir} element={<Pages.OperatingSystem.page />}></Route>
          <Route path={Pages._64BitOSUsingUEFI.data.dir} element={<Pages._64BitOSUsingUEFI.page />}></Route>
          <Route path={Pages.Python.data.dir} element={<Pages.Python.page />}></Route>
          <Route path={Pages.RandomGeneratingAlgorithm.data.dir} element={<Pages.RandomGeneratingAlgorithm.page />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

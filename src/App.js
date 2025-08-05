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

          <Route path={Pages.CCodeHighlighter.data.dir} element={<Pages.CCodeHighlighter.page />}></Route>
          <Route path={Pages.Development.data.dir} element={<Pages.Development.page />}></Route>
          <Route path={Pages.C.data.dir} element={<Pages.C.page />}></Route>
          <Route path={Pages.OperatingSystem.data.dir} element={<Pages.OperatingSystem.page />}></Route>
          <Route path={Pages.Python.data.dir} element={<Pages.Python.page />}></Route>
          <Route path={Pages.RandomGeneratingAlgorithm.data.dir} element={<Pages.RandomGeneratingAlgorithm.page />}></Route>
          <Route path={Pages.PythonCodeHighlighter.data.dir} element={<Pages.PythonCodeHighlighter.page />}></Route>
          <Route path={Pages.Study.data.dir} element={<Pages.Study.page />}></Route>
          <Route path={Pages.FPrimeXDividedByFX.data.dir} element={<Pages.FPrimeXDividedByFX.page />}></Route>
          <Route path={Pages.PCINote.data.dir} element={<Pages.PCINote.page />}></Route>
          <Route path={Pages.CFileIO.data.dir} element={<Pages.CFileIO.page />}></Route>
          <Route path={Pages.DifferentiationAndIntegrationOfCircle.data.dir} element={<Pages.DifferentiationAndIntegrationOfCircle.page/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

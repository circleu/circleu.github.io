import React from "react";
import FolderIndex from "./FolderIndex";
import LinearIndex from "./LinearIndex";
import * as Pages from "../importPages"


function Sidebar() {
  return (
    <div id="Sidebar-body">
      <div id="Sidebar-text">
        <h1>메뉴</h1>
        <hr></hr>

        <ul>
          <LinearIndex name={"메인"} link={"/"} isindent={0} />
        </ul>
        <ul>
          <FolderIndex name={Pages.Development.data.title} link={Pages.Development.data.dir} isopen={1} isindent={0} content={
            <div>
              <FolderIndex name={Pages.C.data.title} link={Pages.C.data.dir} isopen={1} isindent={1} content={
                <div>
                  
                </div>
              } />
              
              <FolderIndex name={Pages.Python.data.title} link={Pages.Python.data.dir} isopen={1} isindent={1} content={
                <div>

                </div>
              } />

              <FolderIndex name={Pages.OperatingSystem.data.title} link={Pages.OperatingSystem.data.dir} isopen={1} isindent={1} content = {
                <div>
                  <LinearIndex name={Pages._64BitOSUsingUEFI.data.title} link={Pages._64BitOSUsingUEFI.data.dir} isindent={1}/>
                </div>
              } />
            </div>
          } />

          <FolderIndex name={Pages.Study.data.title} link={Pages.Study.data.dir} isopen={1} isindent={0} content={
            <div></div>
          } />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
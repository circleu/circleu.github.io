import React from "react";
import FolderIndex from "./FolderIndex";
import LinearIndex from "./LinearIndex";


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
          <FolderIndex name={"개발"} link="/development" isopen={1} isindent={0} content={
            <div>
            <FolderIndex name={"C"} link="/development/c" isopen={1} isindent={1} content={
              <div>
                <FolderIndex name={"운영체제"} link="/development/c/operating-system" isopen={1} isindent={1} content = {
                  <div>
                    <LinearIndex name={"UEFI를 사용한 64 비트 운영체제"} link={"/development/c/operating-system/64-bit-os-using-uefi"} isindent={1}/>
                  </div>
                } />
  
                <LinearIndex name={"도구"} link={"/development/c/tools"} isindent={1}/>
              </div>
            } />
            
            <FolderIndex name={"Python"} link="/development/python" isopen={1} isindent={1} content={
              <div>

              </div>
            } />
            </div>
          } />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
import React from "react";
import { Link } from "react-router-dom";
import FolderIndex from "./FolderIndex";

function Sidebar() {
  return (
    <div id="Sidebar-body">
      <div id="Sidebar-text">
      <h1>메뉴</h1>
      <hr></hr>

      <ul>
        <li className="index"><Link className="index-button" to="/">메인</Link></li>
      </ul>
      <ul>
        <li className="index">개발</li>

        <FolderIndex name={"C"} content={
          <FolderIndex name={"운영체제"} content = {
            <FolderIndex name={"UEFI를 사용한 64비트 운영체제"} content={
              <ul><li className="index"><Link className="index-button" to="/operating-system/64-bit-os-using-uefi/0">0. 들어가며</Link></li></ul>
            } />
          } />
        } />
        
        <FolderIndex name={"Python"} content={
          <div></div>
        } />
      </ul>
      </div>
    </div>
  );
}

export default Sidebar;
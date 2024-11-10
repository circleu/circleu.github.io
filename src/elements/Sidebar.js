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
          <div>
            <FolderIndex name={"운영체제"} content = {
              <FolderIndex name={"UEFI를 사용한 64비트 운영체제"} content={
                <div>
                <ul><li className="index"><Link className="index-button" to="c/operating-system/64-bit-os-using-uefi/0">0. 들어가며</Link></li></ul>
                </div>
              } />
            } />

            <FolderIndex name={"도구"} content = {
              <ul><li className="index"><Link className="index-button" to="c/tools/c-code-highlighter">C 코드 하이라이터</Link></li></ul>
            } />
          </div>
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
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div id='Sidebar'>
            <div id='Sidebar-text'>
            <h1>메뉴</h1>
            <hr></hr>

            <ul>
                <li className='index'><Link className='index-button' to='/'>메인</Link></li>
            </ul>
            <ul>
                <li className='index'>개발</li>
                <details open>
                    <summary className='index'>C</summary>
                </details>
                <details open>
                    <summary className='index'>파이썬</summary>
                    <ul>
                        <li className='index'><Link className='index-button' to='/hangul-romaca-pyenhwanki'>한글 로마자 변환기</Link></li>
                    </ul>
                </details>
            </ul>
            </div>
        </div>
    );
}

export default Sidebar;
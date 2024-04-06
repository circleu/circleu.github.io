import './App.css';
import React from 'react';
import Page from './importPages'


function App() {
  const [title, setTitle] = React.useState(Page.M.title);
  const [lastdate, setLastdate] = React.useState(Page.M.lastdate)
  const [content, setContent] = React.useState(Page.M.content)

  function setPage(obj) {
    setTitle(obj.title);
    setLastdate(obj.lastdate);
    setContent(obj.content);
  }

  return (
    <div>
      <div id='Sidebar'>
        <div id='Sidebar-text'>
          <h1>메뉴</h1>
          <hr></hr>

          <ul>
            <li className='index'><p className='clickable-text' onClick={() => setPage(Page.M)}>메인</p></li>
          </ul>
          <ul>
            <li className='index'>개발</li>
            <details open>
              <summary className='index'>C</summary>
            </details>
            <details open>
              <summary className='index'>파이썬</summary>
              <ul>
                <details>
                  <summary className='index'></summary>
                </details>
              </ul>
            </details>
          </ul>
        </div>
      </div>

      <div id='Main-body'>
        <div id='Main'>
          <div id='Main-text'>
            <h1>{title}</h1>
            <hr></hr>

            <p id='Lastdate'>최근 수정: {lastdate}</p>
            {content}
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

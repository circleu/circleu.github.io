import pageLayout from "../../../../elements/pageLayout.js";


const name = "stdio-h";
const title = "&lt;stdio.h&gt;";
const createTime = "2025-08-02 00:00";
const editTime = "2025-08-02 00:00";
const text =  
`<div id="main-frame">
    <div id="main-text">
        ${pageLayout.putPageHeader(title, createTime, editTime)}
        <h3>파일 스트림 & 파일 구조체</h3>
        <p>
          스트림은 데이터를 주고 받을 수 있는 통로 같은 것이다. 파일 스트림은 프로세스가 파일에 접근할 수 있도록 운영체제에 의해 생성된 스트림이다.
        </p>
        <p>
          파일 구조체는 파일에 대한 정보를 담고 있는 구조체이다. 안에는 입력/출력 스트림의 주소, 파일에서 읽고 쓸 위치 등이 담겨 있다. 
        </p>

        <h3>fopen()</h3>
        <div class="codeblock-frame">
          <div class="codeblock-text">
            <span class="code-white">FILE</span><span class="code-lightyellow">*</span>&nbsp;<span class="code-purple">fopen</span><span class="code-blue">(</span><span class="code-white">const</span>&nbsp;<span class="code-white">char</span><span class="code-lightyellow">*</span>&nbsp;<span class="code-white">filename</span><span class="code-lightyellow">,</span>&nbsp;<span class="code-white">const</span>&nbsp;<span class="code-white">char</span><span class="code-lightyellow">*</span>&nbsp;<span class="code-white">mode</span><span class="code-blue">)</span><span class="code-lightyellow">;</span>
          </div>
        </div>
        <p>
          파일 스트림을 생성하는 함수이다. <span class="codeline">filename</span>은 파일 이름이고 <span class="codeline">mode</span>는 파일에 대한 접근 유형을 지정한다. <span class="codeline">mode</span>의 종류는 아래와 같다:
        </p>
        <table class="table">
          <tr class="table">
            <td class="table">모드</td>
            <td class="table">접근 유형</td>
            <td class="table">특징</td>
          </tr>
          <tr class="table">
            <td class="table">r</td>
            <td class="table">읽기</td>
            <td class="table">파일이 없으면 <span class="codeline">NULL</span> 반환</td>
          </tr>
          <tr class="table">
            <td class="table">w</td>
            <td class="table">쓰기</td>
            <td class="table">파일이 있으면 기존 내용을 덮어 쓰고, 없으면 새 파일 생성</td>
          </tr>
          <tr class="table">
            <td class="table">a</td>
            <td class="table">이어 쓰기</td>
            <td class="table">파일이 있으면 파일의 끝에서부터 이어 쓰고, 없으면 새 파일 생성</td>
          </tr>
          <tr class="table">
            <td class="table" colSpan={3}>모드 뒤에 +를 붙이면 읽기/쓰기 모두 가능</td>
          </tr>
          <tr class="table">
            <td class="table" colSpan={3}>모드 뒤에 b를 붙이면 이진 파일을 읽거나 씀</td>
          </tr>
        </table>
        <p>
          스트림을 생성하는 동안 오류가 없었다면 파일 구조체의 주소를 반환한다.
        </p>
        
        <h3>fgetc(), fgets()</h3>
        <div class="codeblock-frame">
          <div class="codeblock-text">
            <span class="code-white">int</span>&nbsp;<span class="code-purple">fgetc</span><span class="code-blue">(</span><span class="code-white">FILE</span><span class="code-lightyellow">*</span>&nbsp;<span class="code-white">stream</span><span class="code-blue">)</span><span class="code-lightyellow">;</span><br></br>
            <span class="code-white">char</span><span class="code-lightyellow">*</span>&nbsp;<span class="code-purple">fgets</span><span class="code-blue">(</span><span class="code-white">char</span><span class="code-lightyellow">*</span>&nbsp;<span class="code-white">string</span><span class="code-lightyellow">,</span>&nbsp;<span class="code-white">int</span>&nbsp;<span class="code-white">n</span><span class="code-lightyellow">,</span>&nbsp;<span class="code-white">FILE</span><span class="code-lightyellow">*</span>&nbsp;<span class="code-white">stream</span><span class="code-blue">)</span><span class="code-lightyellow">;</span>
          </div>
        </div>
        <p>
          <span class="codeline">fgetc()</span>는 파일 스트림의 현재 위치에서 문자(char)를 읽어들이는 함수이다.
        </p>
        <p>성공적으로 읽어들였다면 읽은 문자를 반환하고, 실패했다면 <span class="codeline">EOF</span>를 반환한다.</p>
        <p>
          <span class="codeline">fgets()</span>은 파일 스트림의 현재 위치에서부터 문자열을 읽어들이는 함수이다. 줄바꿈(\n)을 읽어들이거나, <span class="codeline">n - 1</span>개의 문자를 읽어들일 때까지 문자를 읽어들인다.
        </p>
        <p>읽은 문자열은 <span class="codeline">string</span>에 저장되며, 성공적으로 읽어들였다면 <span class="codeline">string</span>의 주소를, 실패했다면 <span class="codeline">NULL</span>을 반환한다.</p>
        ${pageLayout.putPageFooter()}
    </div>
</div>`;


export default {name, title, createTime, editTime, text};
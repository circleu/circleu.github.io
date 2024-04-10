import React from "react";
import Text from "../../elements/Text";

const pageData = {
  'title': '파이썬 하이라이터',
  'lastdate': '2024-04-10 19:27',
  'content': (
    <div>
      <h3>개요</h3>
      <p>파이썬 코드 하이라이터입니다.</p>
      <p>사이트에 코드 적을 때 수작업으로 색 넣는 게 귀찮아서 만들게 되었습니다.</p>
      <p>제가 쓰기 편하라고 만든 것이라 다른 분들이 쓰기에는 불편한 부분이 많을겁니다.</p>
      <p>jsx 문법이라서 일반 html에 쓰려면 조금 건드려야 합니다.</p>

      <h3>코드</h3>
      <h4>main.py</h4>
      <div className='codeblock-body'>
        <div className='codeblock-text'>
          <span className='code-magenta'>import</span>&ensp;<span className='code-cyan'>otherThings</span>&ensp;<span className='code-magenta'>as</span>&ensp;<span className='code-cyan'>ot</span><br></br>
          <br></br>
          <br></br>
          <span className='code-cyan'>fcode</span>&ensp;<span>=</span>&ensp;<span className='code-lightyellow'>open</span><span className='code-yellow'>(</span><span className='code-orange'>'testCode.py'</span><span>,</span>&ensp;<span className='code-orange'>'r'</span><span className='code-yellow'>)</span><br></br>
          <span className='code-cyan'>code</span>&ensp;<span>=</span>&ensp;<span className='code-yellow'>[</span><span className='code-yellow'>]</span><br></br>
          <span className='code-cyan'>result</span>&ensp;<span>=</span>&ensp;<span className='code-orange'>''</span><br></br>
          <br></br>
          <span className='code-magenta'>while</span>&ensp;<span className='code-blue'>True</span><span>:</span><br></br>
          &ensp;&ensp;<span className='code-cyan'>line</span>&ensp;<span>=</span>&ensp;<span className='code-cyan'>fcode</span><span>.</span><span className='code-lightyellow'>readline</span><span className='code-yellow'>(</span><span className='code-yellow'>)</span><br></br>
          <br></br>
          &ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-blue'>not</span>&ensp;<span className='code-cyan'>line</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>break</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>else</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>code</span>&ensp;<span>+</span><span>=</span>&ensp;<span className='code-cyan'>line</span><br></br>
          &ensp;&ensp;<br></br>
          <span className='code-cyan'>fcode</span><span>.</span><span className='code-lightyellow'>close</span><span className='code-yellow'>(</span><span className='code-yellow'>)</span><br></br>
          <br></br>
          <br></br>
          <span className='code-cyan'>token</span>&ensp;<span>=</span>&ensp;<span className='code-orange'>''</span><br></br>
          <span className='code-cyan'>isStr</span>&ensp;<span>=</span>&ensp;<span className='code-blue'>False</span><br></br>
          <br></br>
          <span className='code-magenta'>for</span>&ensp;<span className='code-cyan'>index</span><span>,</span>&ensp;<span className='code-cyan'>letter</span>&ensp;<span className='code-blue'>in</span>&ensp;<span className='code-lightyellow'>enumerate</span><span className='code-yellow'>(</span><span className='code-cyan'>code</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-cyan'>isStr</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-lightyellow'>matchToken</span><span className='code-yellow'>(</span><span className='code-cyan'>letter</span><span>,</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-cyan'>htmlPunct</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>letter</span>&ensp;<span>=</span>&ensp;<span className='code-orange'>'{'{'}\''</span>&ensp;<span>+</span>&ensp;<span className='code-cyan'>letter</span>&ensp;<span>+</span>&ensp;<span className='code-orange'>'\'{'}'}'</span><br></br>
          <br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>token</span>&ensp;<span>+</span><span>=</span>&ensp;<span className='code-cyan'>letter</span><br></br>
          <br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-lightyellow'>matchToken</span><span className='code-yellow'>(</span><span className='code-cyan'>letter</span><span>,</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-cyan'>orange</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-cyan'>code</span><span className='code-yellow'>[</span><span className='code-cyan'>index</span>&ensp;<span>-</span>&ensp;<span className='code-lightgreen'>1</span><span className='code-yellow'>]</span>&ensp;<span>=</span><span>=</span>&ensp;<span className='code-orange'>'\\'</span>&ensp;<span className='code-blue'>and</span>&ensp;<span className='code-cyan'>code</span><span className='code-yellow'>[</span><span className='code-cyan'>index</span>&ensp;<span>-</span>&ensp;<span className='code-lightgreen'>2</span><span className='code-yellow'>]</span>&ensp;<span className='code-cyan'>!</span><span>=</span>&ensp;<span className='code-orange'>'\\'</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>continue</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>else</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>isStr</span>&ensp;<span>=</span>&ensp;<span className='code-blue'>False</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>result</span>&ensp;<span>+</span><span>=</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-lightyellow'>setElementByText</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span>,</span>&ensp;<span className='code-orange'>'orange'</span><span className='code-yellow'>)</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>token</span>&ensp;<span>=</span>&ensp;<span className='code-orange'>''</span><br></br>
          <br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-blue'>not</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-lightyellow'>matchToken</span><span className='code-yellow'>(</span><span className='code-cyan'>letter</span><span>,</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-cyan'>punct</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>token</span>&ensp;<span>+</span><span>=</span>&ensp;<span className='code-cyan'>letter</span><br></br>
          &ensp;&ensp;<br></br>
          &ensp;&ensp;<span className='code-magenta'>else</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-cyan'>token</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-cyan'>letter</span>&ensp;<span>=</span><span>=</span>&ensp;<span className='code-orange'>'('</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>result</span>&ensp;<span>+</span><span>=</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-lightyellow'>setElementByText</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span>,</span>&ensp;<span className='code-orange'>'lightyellow'</span><span className='code-yellow'>)</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>else</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>result</span>&ensp;<span>+</span><span>=</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-lightyellow'>setElement</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span className='code-yellow'>)</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>token</span>&ensp;<span>=</span>&ensp;<span className='code-orange'>''</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-lightyellow'>matchToken</span><span className='code-yellow'>(</span><span className='code-cyan'>letter</span><span>,</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-cyan'>orange</span><span className='code-yellow'>)</span>&ensp;<span className='code-blue'>and</span>&ensp;<span className='code-blue'>not</span>&ensp;<span className='code-cyan'>isStr</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>isStr</span>&ensp;<span>=</span>&ensp;<span className='code-blue'>True</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>token</span>&ensp;<span>+</span><span>=</span>&ensp;<span className='code-cyan'>letter</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>continue</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-cyan'>result</span>&ensp;<span>+</span><span>=</span>&ensp;<span className='code-cyan'>ot</span><span>.</span><span className='code-lightyellow'>setElement</span><span className='code-yellow'>(</span><span className='code-cyan'>letter</span><span className='code-yellow'>)</span><br></br>
          <br></br>
          <span className='code-magenta'>with</span>&ensp;<span className='code-lightyellow'>open</span><span className='code-yellow'>(</span><span className='code-orange'>'result.jsx'</span><span>,</span>&ensp;<span className='code-orange'>'w'</span><span className='code-yellow'>)</span>&ensp;<span className='code-magenta'>as</span>&ensp;<span className='code-cyan'>fresult</span><span>:</span><br></br>
          &ensp;&ensp;<span className='code-lightyellow'>print</span><span className='code-yellow'>(</span><span className='code-cyan'>result</span><span>,</span>&ensp;<span className='code-cyan'>file</span><span>=</span><span className='code-cyan'>fresult</span><span className='code-yellow'>)</span>

        </div>
      </div>

      <h4>otherThings.py</h4>
      <div className="codeblock-body">
        <div className="codeblock-text">
          <span className='code-blue'>def</span>&ensp;<span className='code-lightyellow'>matchToken</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span>,</span>&ensp;<span className='code-cyan'>tokenList</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>for</span>&ensp;<span className='code-cyan'>i</span>&ensp;<span className='code-blue'>in</span>&ensp;<span className='code-cyan'>tokenList</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-cyan'>token</span>&ensp;<span>=</span><span>=</span>&ensp;<span className='code-cyan'>i</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-blue'>True</span><br></br>
          <br></br>
          &ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-blue'>False</span><br></br>
          <br></br>
          <span className='code-blue'>def</span>&ensp;<span className='code-lightyellow'>includeToken</span><span className='code-yellow'>(</span><span className='code-cyan'>tokenList</span><span>,</span>&ensp;<span className='code-cyan'>token</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>for</span>&ensp;<span className='code-cyan'>i</span>&ensp;<span className='code-blue'>in</span>&ensp;<span className='code-cyan'>tokenList</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-cyan'>i</span>&ensp;<span className='code-blue'>in</span>&ensp;<span className='code-cyan'>token</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-blue'>True</span><br></br>
          &ensp;&ensp;<br></br>
          &ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-blue'>False</span><br></br>
          <br></br>
          <span className='code-blue'>def</span>&ensp;<span className='code-lightyellow'>setElement</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-lightyellow'>matchToken</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span>,</span>&ensp;<span className='code-cyan'>magenta</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span className=\'code-magenta\'{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-lightyellow'>matchToken</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span>,</span>&ensp;<span className='code-cyan'>blue</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span className=\'code-blue\'{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-lightyellow'>matchToken</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span>,</span>&ensp;<span className='code-cyan'>white</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-lightyellow'>matchToken</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span>,</span>&ensp;<span className='code-cyan'>yellow</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span className=\'code-yellow\'{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-lightyellow'>matchToken</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span>,</span>&ensp;<span className='code-cyan'>lightgreen</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span className=\'code-lightgreen\'{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-lightyellow'>matchToken</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span>,</span>&ensp;<span className='code-cyan'>orange</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span className=\'code-orange\'{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          <br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-cyan'>token</span>&ensp;<span>=</span><span>=</span>&ensp;<span className='code-orange'>'\n'</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-orange'>'{'<'}br{'>'}{'<'}/br{'>'}\n'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-cyan'>token</span>&ensp;<span>=</span><span>=</span>&ensp;<span className='code-orange'>' '</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-orange'>'&ensp;'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>else</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span className=\'code-cyan\'{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          <br></br>
          <span className='code-blue'>def</span>&ensp;<span className='code-lightyellow'>setElementByText</span><span className='code-yellow'>(</span><span className='code-cyan'>token</span><span>,</span>&ensp;<span className='code-cyan'>color</span><span className='code-yellow'>)</span><span>:</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>if</span>&ensp;<span className='code-cyan'>color</span>&ensp;<span>=</span><span>=</span>&ensp;<span className='code-orange'>'magenta'</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span className=\'code-magenta\'{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-cyan'>color</span>&ensp;<span>=</span><span>=</span>&ensp;<span className='code-orange'>'blue'</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span className=\'code-blue\'{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-cyan'>color</span>&ensp;<span>=</span><span>=</span>&ensp;<span className='code-orange'>'white'</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-cyan'>color</span>&ensp;<span>=</span><span>=</span>&ensp;<span className='code-orange'>'lightyellow'</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span className=\'code-lightyellow\'{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>elif</span>&ensp;<span className='code-cyan'>color</span>&ensp;<span>=</span><span>=</span>&ensp;<span className='code-orange'>'orange'</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-cyan'>f</span><span className='code-orange'>'{'<'}span className=\'code-orange\'{'>'}{'{'}token{'}'}{'<'}/span{'>'}'</span><br></br>
          &ensp;&ensp;<span className='code-magenta'>else</span><span>:</span><br></br>
          &ensp;&ensp;&ensp;&ensp;<span className='code-magenta'>return</span>&ensp;<span className='code-blue'>None</span><br></br>
          <br></br>
          <span className='code-cyan'>magenta</span>&ensp;<span>=</span>&ensp;<span className='code-yellow'>[</span><span className='code-orange'>'if'</span><span>,</span>&ensp;<span className='code-orange'>'else'</span><span>,</span>&ensp;<span className='code-orange'>'elif'</span><span>,</span>&ensp;<span className='code-orange'>'for'</span><span>,</span>&ensp;<span className='code-orange'>'while'</span><span>,</span>&ensp;<span className='code-orange'>'break'</span><span>,</span>&ensp;<span className='code-orange'>'continue'</span><span>,</span>&ensp;<span className='code-orange'>'return'</span><span>,</span>&ensp;<span className='code-orange'>'import'</span><span>,</span>&ensp;<span className='code-orange'>'as'</span><span>,</span>&ensp;<span className='code-orange'>'from'</span><span>,</span>&ensp;<span className='code-orange'>'with'</span><span className='code-yellow'>]</span><br></br>
          <span className='code-cyan'>blue</span>&ensp;<span>=</span>&ensp;<span className='code-yellow'>[</span><span className='code-orange'>'def'</span><span>,</span>&ensp;<span className='code-orange'>'True'</span><span>,</span>&ensp;<span className='code-orange'>'False'</span><span>,</span>&ensp;<span className='code-orange'>'in'</span><span>,</span>&ensp;<span className='code-orange'>'is'</span><span>,</span>&ensp;<span className='code-orange'>'not'</span><span>,</span>&ensp;<span className='code-orange'>'and'</span><span>,</span>&ensp;<span className='code-orange'>'or'</span><span>,</span>&ensp;<span className='code-orange'>'None'</span><span className='code-yellow'>]</span><br></br>
          <span className='code-cyan'>white</span>&ensp;<span>=</span>&ensp;<span className='code-yellow'>[</span><span className='code-orange'>','</span><span>,</span>&ensp;<span className='code-orange'>'.'</span><span>,</span>&ensp;<span className='code-orange'>':'</span><span>,</span>&ensp;<span className='code-orange'>'='</span><span>,</span>&ensp;<span className='code-orange'>'+'</span><span>,</span>&ensp;<span className='code-orange'>'-'</span><span>,</span>&ensp;<span className='code-orange'>'*'</span><span>,</span>&ensp;<span className='code-orange'>'/'</span><span>,</span>&ensp;<span className='code-orange'>'%'</span><span className='code-yellow'>]</span><br></br>
          <span className='code-cyan'>yellow</span>&ensp;<span>=</span>&ensp;<span className='code-yellow'>[</span><span className='code-orange'>'('</span><span>,</span>&ensp;<span className='code-orange'>')'</span><span>,</span>&ensp;<span className='code-orange'>'['</span><span>,</span>&ensp;<span className='code-orange'>']'</span><span>,</span>&ensp;<span className='code-orange'>'{'{'}'</span><span>,</span>&ensp;<span className='code-orange'>'{'}'}'</span><span className='code-yellow'>]</span><br></br>
          <span className='code-cyan'>lightgreen</span>&ensp;<span>=</span>&ensp;<span className='code-yellow'>[</span><span className='code-orange'>'1'</span><span>,</span>&ensp;<span className='code-orange'>'2'</span><span>,</span>&ensp;<span className='code-orange'>'3'</span><span>,</span>&ensp;<span className='code-orange'>'4'</span><span>,</span>&ensp;<span className='code-orange'>'5'</span><span>,</span>&ensp;<span className='code-orange'>'6'</span><span>,</span>&ensp;<span className='code-orange'>'7'</span><span>,</span>&ensp;<span className='code-orange'>'8'</span><span>,</span>&ensp;<span className='code-orange'>'9'</span><span>,</span>&ensp;<span className='code-orange'>'0'</span><span className='code-yellow'>]</span><br></br>
          <span className='code-cyan'>orange</span>&ensp;<span>=</span>&ensp;<span className='code-yellow'>[</span><span className='code-orange'>'\''</span><span>,</span>&ensp;<span className='code-orange'>'\''</span><span className='code-yellow'>]</span><br></br>
          <br></br>
          <span className='code-cyan'>punct</span>&ensp;<span>=</span>&ensp;<span className='code-yellow'>[</span><span className='code-orange'>'('</span><span>,</span>&ensp;<span className='code-orange'>')'</span><span>,</span>&ensp;<span className='code-orange'>'['</span><span>,</span>&ensp;<span className='code-orange'>']'</span><span>,</span>&ensp;<span className='code-orange'>'{'{'}'</span><span>,</span>&ensp;<span className='code-orange'>'{'}'}'</span><span>,</span>&ensp;<span className='code-orange'>' '</span><span>,</span>&ensp;<span className='code-orange'>','</span><span>,</span>&ensp;<span className='code-orange'>'.'</span><span>,</span>&ensp;<span className='code-orange'>'\n'</span><span>,</span>&ensp;<span className='code-orange'>':'</span><span>,</span>&ensp;<span className='code-orange'>'\''</span><span>,</span>&ensp;<span className='code-orange'>'\''</span><span>,</span>&ensp;<span className='code-orange'>'='</span><span>,</span>&ensp;<span className='code-orange'>'+'</span><span>,</span>&ensp;<span className='code-orange'>'-'</span><span>,</span>&ensp;<span className='code-orange'>'*'</span><span>,</span>&ensp;<span className='code-orange'>'/'</span><span>,</span>&ensp;<span className='code-orange'>'%'</span><span>,</span>&ensp;<span className='code-orange'>' '</span><span className='code-yellow'>]</span><br></br>
          <span className='code-cyan'>htmlPunct</span>&ensp;<span>=</span>&ensp;<span className='code-yellow'>[</span><span className='code-orange'>'{'<'}'</span><span>,</span>&ensp;<span className='code-orange'>'{'>'}'</span><span>,</span>&ensp;<span className='code-orange'>'{'{'}'</span><span>,</span>&ensp;<span className='code-orange'>'{'}'}'</span><span className='code-yellow'>]</span>

        </div>
      </div>
    </div>
  )
};

function PythonHighlighter() {
  return (
    <Text title={pageData.title} lastdate={pageData.lastdate} content={pageData.content} />
  );
}

export default PythonHighlighter;
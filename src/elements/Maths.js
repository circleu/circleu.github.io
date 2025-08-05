import React from "react"

function MathsFrac({x1, x2}) {
  return (
    <div className="maths-element">
      <div className="maths-body">
        <span className="maths-frac">{x1}</span><tr></tr>
        <hr style={{height:"1px", background:"white", border:"0", margin: "2px 0"}}></hr><tr></tr>
        <span className="maths-frac">{x2}</span>
      </div>
    </div>
  );
}
function MathsItalic({x}) {
  return (
    <span className="maths-element"><div className="maths-italic">{x}</div></span>
  )
}
function MathsBold({x}) {
  return (
    <span className="maths-element"><span className="maths-bold">{x}</span></span>
  )
}
function MathsNormal({x}) {
  return (
    <span className="maths-element"><span className="maths-normal" >{x}</span></span>
  );
}
function MathsPunct({x}) {
  return (
    <span className="maths-element"><span className="maths-punct">{x}</span></span>
  );
}
function MathsLim({x1, x2}) {
  return (
    <div className="maths-element">
      <div className="maths-body">
        <MathsNormal x={"lim"} /><tr></tr>
        <span className="maths-power">{x1}{<MathsPunct x={"→"} />}{x2}</span>
      </div>
    </div>
  );
}
function MathsParen({dir}) {
  if (dir == 0) {
    return (
      <div className="maths-element">
        <div className="maths-body">
          <span className="maths-paren">{"("}</span>
        </div>
    </div>
    );
  }
  else if (dir == 1) {
    return (
      <div className="maths-element">
        <div className="maths-body">
          <span className="maths-paren">{")"}</span>
        </div>
      </div>
    );
  }
}
function MathsBrace({dir}) {
  if (dir == 0) {
    return (
      <div className="maths-element">
        <div className="maths-body">
          <span className="maths-paren">{"{"}</span>
        </div>
    </div>
    );
  }
  else if (dir == 1) {
    return (
      <div className="maths-element">
        <div className="maths-body">
          <span className="maths-paren">{"}"}</span>
        </div>
      </div>
    );
  }
}
function MathsBracket({dir}) {
  if (dir == 0) {
    return (
      <div className="maths-element">
        <div className="maths-body">
          <span className="maths-paren">{"["}</span>
        </div>
    </div>
    );
  }
  else if (dir == 1) {
    return (
      <div className="maths-element">
        <div className="maths-body">
          <span className="maths-paren">{"]"}</span>
        </div>
      </div>
    );
  }
}
function MathsSup({x}) {
  return (
    <div className="maths-element">
      <div className="maths-body">
        <span className="maths-power">{x}</span><tr></tr>
        <span className="maths-element">&nbsp;</span><tr></tr>
      </div>
    </div>
  )
}
function MathsSub({x}) {
  return (
    <div className="maths-element">
      <div className="maths-body">
        <span className="maths-void">&nbsp;</span><tr></tr>
        <span className="maths-element">{x}</span>
      </div>
    </div>
  )
}
function MathsExpression({x}) {
  function isalpha(ch) {
    return ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || ch == '\'');
  }
  function isdigit(ch) {
    return (ch >= '0' && ch <= '9');
  }
  function isspace(ch) {
    return (ch == ' ' || ch == '\n' || ch == '\t' || ch == '\r');
  }
  function ispunct(ch) {
    return (!isalpha(ch) && !isdigit(ch) && !isspace(ch));
  }
  function convertLatex(token, _i) {
    let i = _i;
    let argnum = 0;
    let func = "";
    let tmp = [[], []];
    let ret = []; // iserror | obj | index
    let result = 0;
    let brace = 0;

    if (token[i] === '\\' || token[i] === '^' || token[i] === '_') {
      if (token[i] !== '^' && token[i] !== '_') i++;

      func = token[i];

      if (func === "frac")
        argnum = 2;
      else if (func === "lim")
        argnum = 2;
      else if (func === '^')
        argnum = 1;
      else if (func === '_')
        argnum = 1;
      else if (func === "left") {
        argnum = 1;
      }
      else if (func === "right") {
        argnum = 1;
      }
      else if (func === "bf")
        argnum = 1;
      else if (func === "rm")
        argnum = 1;
      else if (func === "cdot")
        argnum = 0;
      else if (func === "cdots")
        argnum = 0;
      else if (func === "therefore")
        argnum = 0;
      else if (func === "Rightarrow")
        argnum = 0;
      else if (func === "infty")
        argnum = 0;
      else if (func === "times")
        argnum = 0;
      else
        argnum = 0;

      i++

      for (let j = 0; j < argnum; j++) {
        if (token[i] === '{') {
          i++;
          brace++;

          for (;; i++) {
            if (token[i] === '{') brace++;
            else if (token[i] === '}') brace--;

            if (brace === 0) break;

            if (token[i] === '\\' || token[i] === '^' || token[i] === '_') {
              var tmpret = convertLatex(token, i);
              if (!tmpret[0]) i = tmpret[2];
              else continue;
              tmp[j].push(tmpret[1]);
            }
            else if (isalpha(token[i])) {
              if (func === "bf")
                tmp[j].push(<MathsBold x={token[i]} />);
              else if (func === "rm")
                tmp[j].push(<MathsNormal x={token[i]} />);
              else
                tmp[j].push(<MathsItalic x={token[i]} />);
            }
            else if (isdigit(token[i]))
              tmp[j].push(<MathsNormal x={token[i]} />);
            else if (ispunct(token[i]))
              tmp[j].push(<MathsPunct x={token[i]} />);
          }

          i++;
        }
      }

      i--;

      if (func === "frac")
        result = (
          <MathsFrac x1={<div>{tmp[0]}</div>} x2={<div>{tmp[1]}</div>} />
        );
      else if (func === "lim")
        result = (
          <MathsLim x1={<span>{tmp[0]}</span>} x2={<span>{tmp[1]}</span>}/>
        );
      else if (func === '^')
        result = (
          <MathsSup x={<span>{tmp[0]}</span>}/>
        );
      else if (func === '_')
        result = (
          <MathsSub x={<span>{tmp[0]}</span>}/>
        );
      else if (func === "left")
        result = (
          <MathsParen dir={0}/>
        );
      else if (func === "right")
        result = (
          <MathsParen dir={1}/>
        );
      else if (func === "bf")
        result = (
          <MathsBold x={tmp[0]}/>
        );
      else if (func === "rm")
        result = (
          <MathsNormal x={tmp[0]}/>
        );
      else if (func === "cdot")
        result = (
          <MathsPunct x={"·"}/>
        );
      else if (func === "cdots")
        result = (
          <span>
            <MathsPunct x={"·"}/>
            <MathsPunct x={"·"}/>
            <MathsPunct x={"·"}/>
          </span>
        );
      else if (func === "therefore")
        result = (
          <MathsPunct x={"∴"}/>
        );
      else if (func === "Rightarrow")
        result = (
          <MathsPunct x={"⇒"}/>
        );
      else if (func === "infty")
        result = (
          <MathsNormal x={"∞"}/>
        );
      else if (func === "times")
        result = (
          <MathsPunct x={"×"}/>
        );
      else
        result = (<span></span>);
    }
    else return [1, null, null];
    return [0, result, i];
  }
  let token = [];
  let stack = "";
  let result = [];
  x = x.split(' ').join('');

  for (let i = 0; i < x.length; i++) {
    if (((isalpha(x[i]) !== isalpha(x[i + 1])) || (isdigit(x[i]) !== isdigit(x[i + 1])) || (ispunct(x[i]) && ispunct(x[i + 1]))) && (x != x.length - 1)) {
      stack += x[i];
      token.push(stack);
      stack = "";
    }
    else stack += x[i];
  }

  let group = [];
  for (let i = 0; i < token.length; i++) {
    let tmpret = convertLatex(token, i);

    if (!tmpret[0]) {
      i = tmpret[2];
      group.push(tmpret[1]);
    }
    else {
      if (token[i] == '~')
        group.push(<MathsNormal x={" "}/>)
      else if (isalpha(token[i]))
        group.push(<MathsItalic x={token[i]}/>);
      else if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(token[i]))
        group.push(<MathsNormal x={token[i]}/>);
      else if (isdigit(token[i]))
        group.push(<MathsNormal x={token[i]}/>);
      else if (ispunct(token[i]))
        group.push(<MathsPunct x={token[i]}/>);
    }
  }

  return (<div className="maths-body">{group}</div>);
}
export {MathsFrac, MathsItalic, MathsBold, MathsNormal, MathsPunct, MathsLim, MathsParen, MathsBrace, MathsBracket, MathsSup, MathsSub, MathsExpression};
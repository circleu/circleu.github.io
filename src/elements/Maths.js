import React from "react"

function MathsFrac({x1, x2}) {
  return (
    <div className="maths-element">
      <div className="maths-body">
        <span className="maths-frac">{x1}</span><tr></tr>
        <hr style={{height:"1px", background:"white"}}></hr><tr></tr>
        <span className="maths-frac">{x2}</span>
      </div>
    </div>
  );
}
function MathsItalic({x}) {
  let ret = [];
  for (let i = 0; i < x.length; i++) {
    switch (x[i]) {
      case "a": ret[i] = "𝑎"; break;
      case "b": ret[i] = "𝑏"; break;
      case "c": ret[i] = "𝑐"; break;
      case "d": ret[i] = "𝑑"; break;
      case "e": ret[i] = "𝑒"; break;
      case "f": ret[i] = "𝑓"; break;
      case "g": ret[i] = "𝑔"; break;
      case "h": ret[i] = "ℎ"; break;
      case "i": ret[i] = "𝑖"; break;
      case "j": ret[i] = "𝑗"; break;
      case "k": ret[i] = "𝑘"; break;
      case "l": ret[i] = "𝑙"; break;
      case "m": ret[i] = "𝑚"; break;
      case "n": ret[i] = "𝑛"; break;
      case "o": ret[i] = "𝑜"; break;
      case "p": ret[i] = "𝑝"; break;
      case "q": ret[i] = "𝑞"; break;
      case "r": ret[i] = "𝑟"; break;
      case "s": ret[i] = "𝑠"; break;
      case "t": ret[i] = "𝑡"; break;
      case "u": ret[i] = "𝑢"; break;
      case "v": ret[i] = "𝑣"; break;
      case "w": ret[i] = "𝑤"; break;
      case "x": ret[i] = "𝑥"; break;
      case "y": ret[i] = "𝑦"; break;
      case "z": ret[i] = "𝑧"; break;
      default: ret[i] = x[i];
    }
  }
  return (
    <span className="maths-element">{ret}</span>
  )
}
function MathsNormal({x}) {
  return (
    <span className="maths-element">{x}</span>
  );
}
function MathsPunct({x}) {
  return (
    <span className="maths-punct">{x}</span>
  );
}
function MathsLim({x1, x2}) {
  return (
    <div className="maths-element">
      <div className="maths-body">
        <span>{"lim"}</span><tr></tr>
        <span className="maths-power">{x1}{<MathsNormal x={"→"} />}{x2}</span>
      </div>
    </div>
  );
}
function MathsParen({dir}) {
  if (dir == 0) {
    return (
      <div className="maths-element">
        <div className="maths-body">
          <span>{"⎛"}</span><tr></tr>
          <span>{"⎜"}</span><tr></tr>
          <span>{"⎝"}</span>
        </div>
    </div>
    );
  }
  else if (dir == 1) {
    return (
      <div className="maths-element">
        <div className="maths-body">
          <span>{"⎞"}</span><tr></tr>
          <span>{"⎟"}</span><tr></tr>
          <span>{"⎠"}</span>
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
        <span className="maths-element">&nbsp;</span>
      </div>
    </div>
  )
}
function MathsSub({x}) {
  return (
    <div className="maths-element">
      <div className="maths-body">
        <span className="maths-elementr">&nbsp;</span><tr></tr>
        <span className="maths-power">{x}</span>
      </div>
    </div>
  )
}
export {MathsFrac, MathsItalic, MathsNormal, MathsPunct, MathsLim, MathsParen, MathsSup, MathsSub};
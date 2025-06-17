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
    <span className="maths-element"><span className="maths-italic">{x}</span></span>
  )
}
function MathsBold({x}) {
  return (
    <span className="maths-element"><span className="maths-bold">{x}</span></span>
  )
}
function MathsNormal({x}) {
  return (
    <span className="maths-element">{x}</span>
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
        <span className="maths-element">&nbsp;</span><tr></tr>
        <span className="maths-power">{x}</span>
      </div>
    </div>
  )
}
export {MathsFrac, MathsItalic, MathsBold, MathsNormal, MathsPunct, MathsLim, MathsParen, MathsBrace, MathsBracket, MathsSup, MathsSub};
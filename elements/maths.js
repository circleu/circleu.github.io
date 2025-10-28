function mathsItalic(x) {
    return (
        `<span class="maths-element"><span class="maths-italic">${x}</span></span>`
    );
}
function mathsRoman(x) {
    return (
        `<span class="maths-element"><span class="maths-roman">${x}</span></span>`
    );
}
function mathsRomanBold(x) {
    return (
        `<span class="maths-element"><span class="maths-roman-bold">${x}</span></span>`
    );
}
function mathsPunct(x) {
    return (
        `<span class="maths-element"><span class="maths-punct">${x}</span></span>`
    );
}
function mathsInt() {
    return (
        `<span class="maths-element"><span class="maths-int">∫</span></span>`
    );
}
function mathsSup(x) {
    return (
        `<sup class="maths-sup">${x}</sup>`
    );
}
function mathsSub(x) {
    return (
        `<sub class="maths-sub">${x}</sub>`
    );
}
function mathsFrac(x, y) {
    return (
        `<span class="maths-frame">
            <div class="maths-element">${x}</div>
            <hr style="background-color: #fff; margin-top: 4px;">
            <hr style="background-color: #000;">
            <div class="maths-element">${y}</div>
        </span>`
    );
}
function mathsSqrt(x) {
    return (
        `<span class="maths-frame-sqrt">
            <span class="maths-sqrt">√</span><span class="maths-frame">
                <hr style="background-color: #fff;">
                <hr style="background-color: #000;">
                <div class="maths-element">${x}</div>
            </span>
        </span>`
    )
}
function mathsOverset(x, y) {
    return (
        `<span class="maths-frame">
            <div class="maths-element">${x}</div>
            <div class="maths-element">${y}</div>
            <div class="maths-element">${mathsRoman("&nbsp;")}</div>
        </span>`
    );
}
function mathsUnderset(x, y) {
    return (
        `<span class="maths-frame">
            <div class="maths-element">${mathsRoman("&nbsp;")}</div>
            <div class="maths-element">${y}</div>
            <div class="maths-element">${x}</div>
        </span>`
    );
}
function mathsSmall(x) {
    return (
        `<span class="maths-small">${x}</span>`
    );
}
function mathsParen(x) {
    return (
        `<span class="maths-element"><span class="maths-paren">${x}</span></span>`
    );
}
function mathsConvert(str) {
    function isalpha(c) {
        return (('A' <= c && c <= 'Z') || ('a' <= c && c <= 'z'));
    }
    function isdigit(c) {
        return ('0' <= c && c <= '9');
    }
    function ispunct(c) {
        return (('!' <= c && c <= '/') || (':' <= c && c <= '@') || ('[' <= c && c <= '`') || ('{' <= c && c <= '~'));
    }
    function isspace(c) {
        return ((c == ' ') || (c == '\t') || (c == '\n'))
    }
    function isdiff(c1, c2) {
        return !((isalpha(c1) && isalpha(c2)) || (isdigit(c1) && isdigit(c2)));
    }
    function convertLetter(func, token, index) {
        let ret = "";

        if (token[index] == '~') {
            ret = mathsRoman("&nbsp;");
        }
        else if (token[index] == '\'') {
            ret = mathsItalic("&nbsp;");
        }
        else if (isalpha(token[index])) {
            if (func == "rm") {
                ret = mathsRoman(token[index]);
            }
            else if (func == "bf") {
                ret = mathsRomanBold(token[index]);
            }
            else {
                ret = mathsItalic(token[index]);
            }
        }
        else if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(token[index])) {
            ret += mathsRoman(token[index]);
        }
        else if (isdigit(token[index])) {
            ret += mathsRoman(token[index]);
        }
        else if (ispunct(token[index])) {
            ret += mathsPunct(token[index]);
        }
        else {
            ret += mathsRoman(token[index]);
        }

        return ret;
    }
    function convertFunction(token, index) {
        let argnum = 0;
        let func = "";
        let brace = 0;
        let args = ["", ""];
        let ret = ["", 0];

        if (token[index] == "\\" || token[index] == "^" || token[index] == "_") {
            if (token[index] == "\\") {
                index++;
            }

            func = token[index];
            index++;

            switch (func) {
                case "int": argnum = 0; break;
                case "lim": argnum = 0; break;
                case "rightarrow": argnum = 0; break;
                case "Rightarrow": argnum = 0; break;
                case "pi": argnum = 0; break;
                case "sigma": argnum = 0; break;
                case "mu": argnum = 0; break;
                case "left": argnum = 0; if (token[index] == "(" || token[index] == "[" || token[index] == "{") index++; break;
                case "right": argnum = 0; if (token[index] == ")" || token[index] == "]" || token[index] == "}") index++; break;
                case "infty": argnum = 0; break;
                case "cdot": argnum = 0; break;
                case "cdots": argnum = 0; break;

                case "rm": argnum = 1; break;
                case "^": argnum = 1; break;
                case "_": argnum = 1; break;
                case "small": argnum = 1; break;
                case "sqrt": argnum = 1; break;

                case "overset": argnum = 2; break;
                case "underset": argnum = 2; break;
                case "frac": argnum = 2; break;

                default: argnum = 0; break;
            }
            
            for (let i = 0; i < argnum; i++) {
                if (token[index] == "{") { index++; brace++;
                    for (;; index++) {
                        if (token[index] == "{") {
                            brace++;
                        }
                        else if (token[index] == "}") {
                            brace--;
                        }

                        if (brace == 0) {
                            break;
                        }

                        if (token[index] == "\\" || token[index] == "^" || token[index] == "_") {
                            let tmp = convertFunction(token, index);

                            index = tmp[1];
                            args[i] += tmp[0];
                        }
                        else {
                            args[i] += convertLetter(func, token, index);
                        }
                    } index++;
                }
            } index--;

            switch (func) {
                case "int": ret[0] += mathsInt(); break;
                case "lim": ret[0] += mathsRoman("lim"); break;
                case "rightarrow": ret[0] += mathsPunct("→"); break;
                case "Rightarrow": ret[0] += mathsPunct("⇒"); break;
                case "pi": ret[0] += mathsItalic("π"); break;
                case "sigma": ret[0] += mathsItalic("σ"); break;
                case "mu": ret[0] += mathsItalic("μ"); break;
                case "left": ret[0] += mathsParen(token[index]); break;
                case "right": ret[0] += mathsParen(token[index]); break;
                case "infty": ret[0] += mathsRoman("∞"); break;
                case "cdot": ret[0] += mathsRoman("⋅"); break;
                case "cdots": ret[0] += mathsRoman("⋅⋅⋅"); break;

                case "rm": ret[0] += args[0]; break;
                case "^": ret[0] += mathsSup(args[0]); break;
                case "_": ret[0] += mathsSub(args[0]); break;
                case "small": ret[0] += mathsSmall(args[0]); break;
                case "sqrt": ret[0] += mathsSqrt(args[0]); break;

                case "overset": ret[0] += mathsOverset(args[0], args[1]); break;
                case "underset": ret[0] += mathsUnderset(args[0], args[1]); break;
                case "frac": ret[0] += mathsFrac(args[0], args[1]); break;

                default: ret[0] += ""
            }

            ret[1] = index;
        }
        else {
            ret[0] = convertLetter(null, token, index);
            ret[1] = index;
        }

        return ret;
    }

    let stack = "";
    let token = [];

    for (let i = 0; i < str.length; i++) {
        if (isspace(str[i])) {
            continue;
        }

        stack += str[i];

        if (isdiff(str[i], str[i + 1])) {
            token.push(stack);
            stack = "";
        }
    }

    let ret = "";

    for (let i = 0; i < token.length; i++) {
        let tmp = convertFunction(token, i);
        ret += tmp[0];
        i = tmp[1];
    }

    return (`<div class="maths-frame">${ret}</div>`);
}
// You *MUST* add this function to pageData.js
function mathsSetting() {
    let init = 0;
    let intrv = setInterval(() => {
        var sqrt = document.getElementsByClassName("maths-sqrt");
        var paren = document.getElementsByClassName("maths-paren");
        for (let i = 0; i < sqrt.length && init === 0; i++) {
            let parentHeight = sqrt[i].parentElement.parentElement.offsetHeight * 1.3;
            sqrt[i].style.fontSize = `${parentHeight}px`;
        }
        for (let i = 0; i < paren.length && init === 0; i++) {
            let parentHeight = paren[i].parentElement.parentElement.offsetHeight * 1;
            paren[i].style.fontSize = `${parentHeight}px`;
        }
        init = 1;
        if (init)
            clearInterval(intrv)
    }, 100);
}

export default {mathsConvert, mathsSetting}
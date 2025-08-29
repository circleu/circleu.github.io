function putMathsFrac(x1, x2) {
    return (
        `<div class="maths-element">
            <div class="maths-frame" style="vertical-align: middle">
                <span class="maths-element">${x1}</span><tr></tr>
                <hr style="background-color: #fff;">
                <hr style="background-color: #000;">
                <span class="maths-element">${x2}</span>
            </div>
        </div>`
    );
}
function putMathsRoman(x) {
    return (
        `<span class="maths-element"><div class="maths-font-roman">${x}</div></span>`
    );
}
function putMathsRomanBold(x) {
    return (
        `<span class="maths-element"><div class="maths-font-roman-bold">${x}</div></span>`
    );
}
function putMathsItalic(x) {
    return (
        `<span class="maths-element"><div class="maths-font-italic">${x}</div></span>`
    );
}
function putMathsSup(x) {
    return (
        `<div class="maths-element">
            <div class="maths-frame">
                <span class="maths-element-small" style="vertical-align: super">${x}</span>
            </div>
        </div>`
    );
}
function putMathsSub(x) {
    return (
        `<div class="maths-element">
            <div class="maths-frame">
                <span class="maths-element-small" style="vertical-align: sub">${x}</span>
            </div>
        </div>`
    );
}
function putMaths(expression) {
    function isalpha(ch) {
        return ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || ch == '\'');
    }
    function isdigit(ch) {
        return (ch >= '0' && ch <= '9');
    }
    function isspace(ch) {
        return (ch == ' ' || ch == '\n' || ch == '\t' || ch == '\r');
    }
    function isdifferent(ch1, ch2) {
        return (!(isalpha(ch1) && isalpha(ch2)) && !(isdigit(ch1) && isdigit(ch2)));
    }
    function convert(token, index) {
        let arg_num = 0;
        let func = "";
        let brace = 0;
        let args = ["", ""];
        let ret = ["", 0]; // str, index

        if (token[index] === '\\' || token[index] === '^' || token[index] === '_') {
            if (token[index] === '\\') index++;
            for (; token[index] !== '{' && token[index] !== ' ' && token[index] !== '\\' && token[index] !== '}' && index < token.length; index++) {
                func += token[index];
            }

            if (token[index] === ' ') index++;

            switch (func) {
                case "frac": arg_num = 2; break;
                case "int": arg_num = 0; break;
                case "lim": arg_num = 0; break;
                case "rightarrow": arg_num = 0; break;
                case "Rightarrow": arg_num = 0; break;
                case "^": arg_num = 1; break;
                case "_": arg_num = 1; break;
                case "rm": arg_num = 1; break;
                case "bf": arg_num = 1; break;
                case "therefore": arg_num = 0; break;
                case "infty": arg_num = 0; break;
                case "times": arg_num = 0; break;
                case "neq": arg_num = 0; break;
                case "cdot": arg_num = 0; break;
                case "cdots": arg_num = 0; break;
                default: arg_num = 0; break;
            }

            for (let i = 0; i < arg_num; i++) {
                if (token[index] === '{') { index++; brace++;
                    for (; ; index++) {
                        if (token[index] === '{') brace++;
                        else if (token[index] === '}') brace--;

                        if (brace === 0) break;

                        if (token[index] === '\\' || token[index] === '^' || token[index] === '_') {
                            let tmp = convert(token, index);
                            index = tmp[1];
                            args[i] += tmp[0];
                        }
                        else if (token[index] === '~') {
                            args[i] += putMathsRoman("&nbsp;");
                        }
                        else if (token[index] === '\'') {
                            args[i] += putMathsItalic(token[index]);
                        }
                        else if (isalpha(token[index])) {
                            if (func === "bf") {
                                args[i] += putMathsRomanBold(token[index]);
                            }
                            else if (func === "rm") {
                                args[i] += putMathsRoman(token[index]);
                            }
                            else {
                                args[i] += putMathsItalic(token[index]);
                            }
                        }
                        else if (isdigit(token[index])) {
                            args[i] += putMathsRoman(token[index]);
                        }
                        else {
                            args[i] += putMathsRoman(token[index]);
                        }
                    } index++;
                }
            } index--;

            switch (func) {
                case "frac": ret[0] += putMathsFrac(args[0], args[1]); break;
                case "int": ret[0] += putMathsRoman("∫"); break;
                case "lim": ret[0] += putMathsRoman("lim"); break;
                case "rightarrow": ret[0] += putMathsRoman("→"); break;
                case "Rightarrow": ret[0] += putMathsRoman("⇒"); break;
                case "^": ret[0] += putMathsSup(args[0]); break;
                case "_": ret[0] += putMathsSub(args[0]); break;
                case "rm": ret[0] += putMathsRoman(args[0]); break;
                case "bf": ret[0] += putMathsRomanBold(args[0]); break;
                case "therefore": ret[0] += putMathsRoman("∴"); break;
                case "infty": ret[0] += putMathsRoman("∞"); break;
                case "times": ret[0] += putMathsRoman("×"); break;
                case "neq": ret[0] += putMathsRoman("≠"); break;
                case "cdot": ret[0] += putMathsRoman("·"); break;
                case "cdots": ret[0] += putMathsRoman("···"); break;
            }

            ret[1] = index;
        }
        else {
            if (token[index] === '~') {
                ret[0] += putMathsRoman('&nbsp;');
            }
            else if (token[index] === '\'') {
                ret[0] += putMathsItalic(token[index]);
            }
            else if (isalpha(token[index])) {
                ret[0] += putMathsItalic(token[index]);
            }
            else if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(token[index])) {
                ret[0] += putMathsRoman(token[index]);
            }
            else if (isdigit(token[index])) {
                ret[0] += putMathsRoman(token[index]);
            }
            else {
                ret[0] += putMathsRoman(token[index]);
            }

            ret[1] = index;
        }

        return ret;
    }

    let token = [];
    let stack = "";
    let space = 0;
    for (let i = 0; i < String(expression).length; i++) {
        if (isspace(expression[i])) {
            if (space) {
                space = 0;
                continue;
            }
            else space = 1;
        }
        stack += expression[i];

        if (i !== expression.length) {
            if (isdifferent(expression[i], expression[i + 1])) {
                token.push(stack);
                stack = "";
            }
        }
    }

    let ret = "";
    for (let i = 0; i < token.length; i++) {
        let tmp = convert(token, i);
        ret += tmp[0];
        i = tmp[1];
    }

    console.log(token);

    return (`<div class="maths-frame">${ret}</div>`);
}

export default {putMaths};
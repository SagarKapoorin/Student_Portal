var input1 = "";
var input2 = "";
var ans = "";
var nextnumber = true;
var operation = "";

function digit(input) {
    if (nextnumber) {
        //if input is 0 again take input
        if (input1 === '0') {
            input1 = input;
        } else {
            input1 += input;
        }
        updatedisplay(input1);
    } else {
        input2 += input;
        updatedisplay(input2);
    }
}


function decimal() {
    if (nextnumber) {
        if (!input1.includes('.')) {
            input1 += "."
        }
        updatedisplay(input1)
    } else {
        if (!input2.includes('.')) {
            input2 += "."
        }
        updatedisplay(input2)
    }
}

function cClear() {
    input1 = "";
    input2 = "";
    operation = "";
    nextnumber = true;
    displayOperation("");
    updatedisplay("");
    // reset all

}

function add() {
    // better to make function for add,sub,divide all in one...
    calculate()
    if (nextnumber && input1 != "") {
        nextnumber = false;
        operation = "+"
        displayOperation("+");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
}

function sub() {
    calculate()
    if (nextnumber && input1 != "") {
        nextnumber = false;
        operation = "–"
        displayOperation("–");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
}

function div() {
    calculate()
    if (nextnumber && input1 != "") {
        nextnumber = false;
        operation = "÷"
        displayOperation("÷");
    }
}

function mul() {
    calculate()
    if (nextnumber && input1 != "") {
        nextnumber = false;
        operation = "×"
        displayOperation("×");
    }
}

function log() {
    calculate()
    if (nextnumber && input1 != "") {
        nextnumber = false;
        operation = "log"
        displayOperation("log");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
}

function getBaseLog(x, y) {

    return Math.log(y) / Math.log(x);
}

function pow() {
    calculate()
    if (nextnumber && input1 != "") {
        nextnumber = false;
        operation = "pow";
        displayOperation("pow");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
}

function squareroot() {
    calculate()
    if (nextnumber && input1 != "") {
        nextnumber = false;
        operation = "squareroot";
        displayOperation("√");
    }
}

function rndx() {
    //round off to x
    calculate()
    if (nextnumber && input1 != "") {
        nextnumber = false;
        operation = "rndx";
        displayOperation("rndₓ");
    }
}

let _input1, _input2 = 0;
function calculate() {
    if (input1 != "" && input2 != "") {
        switch (operation) {
            case "+":
                _input1 = Number(input1);
                _input2 = Number(input2);
                ans = _input1 + _input2;
                showAns(ans)
                break;

            case "–":
                _input1 = Number(input1);
                _input2 = Number(input2);
                ans = _input1 - _input2;
                showAns(ans)
                break;
            case "÷":
                _input1 = Number(input1);
                _input2 = Number(input2);
                ans = _input1 / _input2;
                showAns(ans)
                break;
            case "×":
                _input1 = Number(input1);
                _input2 = Number(input2);
                ans = _input1 * _input2;
                showAns(ans)
                break;
            case "log":
                _input1 = Number(input1);
                _input2 = Number(input2);
                ans = getBaseLog(_input1, _input2);
                showAns(ans)
                break;
            case "pow":
                _input1 = Number(input1);
                _input2 = Number(input2);
                ans = Math.pow(_input1, _input2);
                showAns(ans)
                break;
            case "squareroot":
                _input1 = Number(input1);
                _input2 = Number(input2);
                ans = Math.pow(_input1, 1 / _input2);
                showAns(ans)
                break;
            case "rndx":
                _input1 = Number(input1);
                _input2 = Number(input2);
                ans = Math.round(input1 * (Math.pow(10, input2))) / Math.pow(10, input2);
                showAns(ans)
                break;
        }
    }
}

function showAns(answer) {
    input1 = (Math.round(ans * 1000000000) / 1000000000).toString();
    updatedisplay(input1);
    input2 = "";
    nextnumber = true;
    displayOperation("");
    operation = ""
}

function neg() {
    if (nextnumber) {
        input1 *= -1;
        updatedisplay(input1);
    } else {
        input2 *= -1;
        updatedisplay(input2);
    }
}

function percent() {
    if (nextnumber) {
        input1 /= 100;
                //rounding off necessary ,going out of calclutor
        input1 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input1);
    } else {
        input2 /= 100;
        input2 = Math.round(input2 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function sin() {
    if (nextnumber) {
        input1 = Math.sin(input1);
        //rounding off necessary ,going out of calclutor
        input1 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input1);
    } else {
        input2 = Math.sin(input2);
        input2 = Math.round(input2 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function cos() {
    if (nextnumber) {
        input1 = Math.cos(input1);
        input1 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input1);
    } else {
        input2 = Math.cos(input2);
        input2 = Math.round(input2 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function tan() {
    if (nextnumber) {
        input1 = Math.tan(input1);
        input1 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input1);
    } else {
        input2 = Math.tan(input2);
        input2 = Math.round(input2 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function sin_i() {
    if (nextnumber) {
        input1 = Math.asin(input1);
        input1 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input1);
    } else {
        input2 = Math.sin(input2);
        input2 = Math.round(input2 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function cos_i() {
    if (nextnumber) {
        input1 = Math.acos(input1);
        input1 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input1);
    } else {
        input2 = Math.cos(input2);
        input2 = Math.round(input2 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function tan_i() {
    if (nextnumber) {
        input1 = Math.atan(input1);
        input1 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input1);
    } else {
        input2 = Math.tan(input2);
        input2 = Math.round(input2 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function square() {
    if (nextnumber) {
        input1 = Math.pow(input1, 2);
        input1 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input1);
    } else {
        input2 = Math.pow(input2, 2);
        input2 = Math.round(input2 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function sqrt() {
    if (nextnumber) {
        input1 = Math.pow(input1, 0.5);
        input1 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input1);
    } else {
        input2 = Math.pow(input2, 0.5);
        input2 = Math.round(input2 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}
function fac() {
    if (nextnumber) {
        input1 = factorial(input1, 0.5);
        input1 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input1);
    } else {
        input2 = factorial(input2, 0.5);
        input2 = Math.round(input2 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}

function tenPow() {
    if (nextnumber) {
        input1 = Math.pow(10, input1);
        input1 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input1);
    } else {
        input2 = Math.pow(10, input2);
        input2 = Math.round(input2 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function rnd() {
    //round off to nearest
    if (nextnumber) {
        input1 = Math.round(input1);
        updatedisplay(input1);
    } else {
        input2 = Math.round(input2);
        updatedisplay(input2);
    }
}

function rand() {
    //random number generate
    if (nextnumber) {
        input1 = Math.random()*100;
        input1 = Math.round(input1 * 1000000000) / 1000000000;
        updatedisplay(input1);
    } else {
        input2 = Math.random();
        input2 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function e() {
    if (nextnumber) {
        input1 = 2.71828;
        input1 = Math.round(input1 * 1000000000) / 1000000000;
        updatedisplay(input1);
    } else {
        input2 = 2.71828;
        input2 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function Pi() {
    if (nextnumber) {
        input1 = 3.14159;
        updatedisplay(input1);
    } else {
        input2 = 3.14159;
        updatedisplay(input2);
    }
}

function Ans() {
    if (nextnumber) {
        input1 = history[0];
        input1 = Math.round(input1 * 1000000000) / 1000000000;
        updatedisplay(input1);
    } else {
        input2 = history[0];
        input2 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function updatedisplay(input) {

    document.getElementById("input-number").innerHTML = input;
}

function displayOperation(input) {

    document.getElementById("operation").innerHTML = input;
}

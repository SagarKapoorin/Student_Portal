let input1="";
let input2="";
let operation="";
let nextnumber=false;

function updatedisplay(input) {
    const p = document.getElementById('input-number');
    p.textContent = input;
}

function digits(digit){
//replace zero if zero is first clicked
if(nextnumber==false){
 if (input1 === '0') {
    input1 = digit;
  } else {
    input1 += digit;
  }
  updatedisplay(input1);
}else{
    if (input2 === '0') {
        input2 = digit;
      } else {
        input2 += digit;
      }
      updatedisplay(input2);
}
};
function displayOperation(sign){
document.getElementById("operation").innerHTML=sign;
};
function add(){
    // better to make function for add,sub,divide all in one...
    calculate();
    if (!nextnumber&& input1 != "") {
        nextnumber = true;
        operation = "+"
        displayOperation("+");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
};
function sub(){
    // better to make function for add,sub,divide all in one...
    calculate();
    if (!nextnumber&& input1 != "") {
        nextnumber = true;
        operation = "-"
        displayOperation("-");
    }
    //  console.log(input1+" "+input2+" "+nextnumber);
};
function multiply(){
    // better to make function for add,sub,divide all in one...
    calculate();
    if (!nextnumber&& input1 != "") {
        nextnumber = true;
        operation = "*"
        displayOperation("x");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
};
function divide(){
    // better to make function for add,sub,divide all in one...
    calculate();
    if (!nextnumber&& input1 != "") {
        nextnumber = true;
        operation = "/"
        displayOperation("/");
    }

};
function log(){
    // better to make function for add,sub,divide all in one...
    calculate();
    if (!nextnumber&& input1 != "") {
        nextnumber = true;
        operation = "log"
        displayOperation("log");
    }
};
function pow(){
    // better to make function for add,sub,divide all in one...
    calculate();
    if (!nextnumber&& input1 != "") {
        nextnumber = true;
        operation = "pow"
        displayOperation("pow");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
};
function radical(){
    // better to make function for add,sub,divide all in one...
    calculate();
    if (!nextnumber&& input1 != "") {
        nextnumber = true;
        operation = "radical"
        displayOperation("radical");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
};
function rndx(){
    // better to make function for add,sub,divide all in one...
    calculate();
    if (!nextnumber&& input1 != "") {
        nextnumber = true;
        operation = "randx"
        displayOperation("rndx");
    }
    // console.log(input1+" "+input2+" "+nextnumber);
};
function calculate(){
    if (input1 != "" && input2 != "") {
        switch (operation) {
            case "+":
                ans = Number(input1) + Number(input2);
                // console.log(ans);
                showAns(ans);
                break;
            case "-":
                ans = Number(input1) - Number(input2);
                showAns(ans)
                break;
            case "/":
                ans = Number(input1) / Number(input2);
                showAns(ans)
                break;
            case "*":
                ans = Number(input1) * Number(input2);
                showAns(ans)
                break;
            case "log":
                ans = getBaseLog(Number(input1), Number(input2));
                showAns(ans)
                break;
            case "pow":
                ans = Math.pow(Number(input1), Number(input2));
                showAns(ans)
                break;
            case "radical":
                ans = Math.pow(Number(input1), 1 / Number(input2));
                showAns(ans)
                break;
            case "randx":
                // round off to x digits
                ans = Math.round(input1 * (Math.pow(10, input2))) / Math.pow(10, input2);
                showAns(ans)
                break;
        }
    }
};
function showAns(answer) {
    //better to round off to 9 decimal place ,otherwise it go out
    input1 = (Math.round(ans * 1000000000) / 1000000000).toString();
    //better to putin input1 as person can ask to re add ,sub,divide etc...
    updatedisplay(input1);
    input2 = "";
    nextnumber = false;
    displayOperation("");
    operation = "";
};
//function which needs 1 inputs,doing round off is must for most answers
function sqrt() {
    if (!nextnumber) {
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
    if (!nextnumber) {
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
    if (!nextnumber) {
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
    //generate a round off value
    if (!nextnumber) {
        input1 = Math.round(input1);
        updatedisplay(input1);
    } else {
        input2 = Math.round(input2);
        display(input2);
    }
}

function rand() {
    //generate random number
    if (!nextnumber) {
        input1 = Math.random();
        input1 = Math.round(input1 * 1000000000) / 1000000000;
        updatedisplay(input1);
    } else {
        input2 = Math.random();
        input2 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
}

function e() {
    if (!nextnumber) {
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
    if (!nextnumber) {
        input1 = 3.14159;
        updatedisplay(input1);
    } else {
        input2 = 3.14159;
        updatedisplay(input2);
    }
}

function ans() {
    // roundoff
    if (!nextnumber) {
        input1 = Math.round(input1 * 1000000000) / 1000000000;
        updatedisplay(input1);
    } else {
        input2 = Math.round(input1 * 1000000000) / 1000000000
        updatedisplay(input2);
    }
};
function getBaseLog(x, y) {

    return Math.log(y) / Math.log(x);
}

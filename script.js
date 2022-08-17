

const display = document.querySelector('#display');
const nums = document.querySelectorAll('.number');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const decimal = document.querySelector('#decimal');
const operators = document.querySelectorAll('.operator');
const eval = document.querySelector('#equals');

clear.addEventListener('click', () => window.location.reload());

del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent == '') display.textContent = '0';
});




nums.forEach(num => num.addEventListener('click', getFirstNum));

operators.forEach(operator => operator.addEventListener('click', opEvent));

function opEvent(e) {
    if (display.textContent !== '0') {
        let operator = [...operators].filter(operator => operator.classList.contains('darker'))[0];
        this.classList.toggle('darker');
        if (this.classList.contains('darker')) {
            unselectOthers(e);
            if (typeof firstNum !== 'undefined') doSomething(operator);
            globalThis.firstNum = Number(display.textContent);
            nums.forEach(num => {
                num.removeEventListener('click', getFirstNum);
                num.addEventListener('click', getNextNum);
            });
}}
}
function changeOp() {
    
}



//remove darker class from operator when another operator is selected
function unselectOthers(e) { 
    let selected = e.srcElement.innerText;
    operators.forEach(operator => {
        if (selected !== operator.innerText) operator.classList.remove('darker');
    });
}


function getFirstNum() {
    if (display.textContent == '0') display.textContent = '';
    display.textContent += this.textContent;
}


function getNextNum() {
    display.textContent = this.textContent;
    //operators.forEach(operator => operator.removeEventListener('click', opEvent));
    nums.forEach(num => {
        num.removeEventListener('click', getNextNum);
        num.addEventListener('click', () => display.textContent += num.textContent);
    });
    
    addEvalEventListener();
}

function doSomething(op) {
    globalThis.secondNum = Number(display.textContent);
    let result = operate(firstNum, secondNum, op.textContent);
    display.textContent = result;
    globalThis.firstNum = result;
}


function addEvalEventListener(op) {
    eval.addEventListener('click', () => {
        globalThis.secondNum = Number(display.textContent);
        //let operator = [...operators].filter(operator => operator.classList.contains('darker'))[0];
        let result = operate(firstNum, secondNum, operator.textContent);
        display.textContent = result;
        operator.classList.remove('darker');
    });
}

function operate(a, b, operator) {
    switch (operator) {
        case '\u00F7':
            return a/b;
        case '\u00D7':
            return  a*b;
        case '\u2212':
            return a-b;
        case '\u002B':
            return a+b;
    }
}

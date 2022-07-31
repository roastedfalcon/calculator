function operate(a, b, operator) {
    operator(a, b);
}

const display = document.querySelector('#display');
const nums = document.querySelectorAll('.number');
nums.forEach(num => num.addEventListener('click', () => {
    if (display.textContent == '0') display.textContent = '';
    display.textContent += num.textContent;
}))

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => window.location.reload());

const del = document.querySelector('#delete');
del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent == '') display.textContent = '0';
});

const decimal = document.querySelector('#decimal');

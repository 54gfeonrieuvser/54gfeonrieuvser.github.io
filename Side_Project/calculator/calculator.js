let total = 0;
let buffer = '';
let operator = 'none';
const screen = document.querySelector('.screen');

function plus() {
    if(operator !== 'none'){
        buffer = total.toString();
        screen.innerHTML = '0';
        operator = '+';
        return;
    }
    buffer = screen.innerHTML;
    screen.innerHTML = '0';
    operator = '+';
}
function minus() {   
    if(operator !== 'none'){
    buffer = total.toString();
    screen.innerHTML = '0';
    operator = '-';
    return;
}
    if(screen.innerHTML === '0'){
        screen.innerHTML = '-';
        return;
    }
    buffer = screen.innerHTML;
    screen.innerHTML = '0';
    operator = '-';
}

function multiply() {
    if(operator !== 'none'){
        buffer = total.toString();
        screen.innerHTML = '0';
        operator = '*';
        return;
    }
    buffer = screen.innerHTML;
    screen.innerHTML = '0';
    operator = '*';
}

function divided_by() {
    if(operator !== 'none'){
        buffer = total.toString();
        screen.innerHTML = '0';
        operator = '/';
        return;
    }
    buffer = screen.innerHTML;
    screen.innerHTML = '0';
    operator = '/';
}

function equal() {
    screen.innerHTML = total.toString();
    operator ==='none';
}

function back() {
    if( screen.innerHTML.length == 1){
        screen.innerHTML = '0';
        return;
    }
    screen.innerHTML = screen.innerHTML.substr(0,  screen.innerHTML.length -1);
}

function init() {
    total = 0;
    buffer = '';
    operator = 'none';
    console.log('clear');
    screen.innerHTML = '0';
}

function addstring(num) {
    if (screen.innerHTML === '0'){
        screen.innerHTML = '';
    }
        screen.innerHTML += num;
        const M = parseInt(buffer);
        const N = parseInt(screen.innerHTML);
        if(operator === '+'){
            total = M+N;
        }else if(operator === '-'){
            total = M-N;
        }else if(operator === '*'){
            total = M*N;
        }else if(operator === '/'){
            total = M/N;
        }else if (operator ==='none'){
        total = parseInt(screen.innerHTML);
    }
        // console.log('total =');
        // console.log(total); 
}

//for number input
for (let i = 1; i < 11; i++) {
    document.querySelectorAll('.number')[i - 1].addEventListener('click', function () { addstring(document.querySelectorAll('.number')[i - 1].innerHTML) });
}

// for operator input
document.getElementById('divide').addEventListener('click', divided_by);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('minus').addEventListener('click', minus);
document.getElementById('plus').addEventListener('click', plus);

document.getElementById('equal').addEventListener('click', equal);

document.getElementById('back').addEventListener('click', back);
document.getElementById('clear').addEventListener('click', init);

init();
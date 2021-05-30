let div = document.querySelectorAll('.one');
console.log(div);
// div.style.background = 'red';

for (let i = 0; i < div.length; i++) {
    console.log(div[i]);
    div[i].style.background = 'red';
    div[i].onclick = two;
}

function two() {
    console.log('work!!!');
}

let b = document.getElementsByClassName('one');
let c = document.getElementsByTagName('div');
console.log(b);
console.log(c);

for (let i = 0; i < b.length; i++) {
    b[i].style.border = '3px solid black';
}

document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}

/////////////////////////////////////////////////////////
// Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить
//  в out-1 строку вида:1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача
//  решается с помощью цикла.
document.querySelector('#b1').onclick = f1;
let out1 = '';
function f1() {
    for (i = 1; i < 51; i++) {
        out1 = out1 + i + ' ';
        document.querySelector('#app').innerHTML = out1;
    }
   
}

////////////////////////////////////////////////////////////
// Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить
//  в out-2 строку вида:2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел.
//  Задача решается с помощью цикла.

document.getElementById('b2').onclick = f2;
let out2 = '';
function f2() {
    for(i = 2; i <= 122; i+=2) {
        out2 = out2 + i + ' ';
        document.querySelector('#app2').innerHTML = out2;
    }
}

///////////////////////////////////////////////////////
// Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить
//  в out-3 строку вида:25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел.
//  Задача решается с помощью цикла.
document.getElementById('b3').onclick = f3;
let out3 = '';
function f3() {
    for(i = 25; i >= 7; i-- ) {
        out3 = out3 + i + ' ';
        document.querySelector('#app3').innerHTML = out3;
    }
}
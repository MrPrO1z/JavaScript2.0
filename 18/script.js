for (let i = 0; i < 6; i++) {
    console.log(i);
}

let k = 0;
while (k < 5) {
    k++;
    console.log('k: ' + k);
}
// 0 + ... + 10 // 1+2+3 выводим сумму чисел
let sum = 0;
let p = 0;
while (p <= 3) {
    sum = sum + p;
    p++;
}
console.log('sum = ' + sum);
// ****
// ****
// ****
// ****
p = 0;
let out = document.querySelector('.out');
let outStr = '';
let flag = 3;
while (p < 4) {
    let p1 = 0;
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += '0';
        }
        else {
            outStr += '*';
        }
        p1++;
    }
    flag--;
    outStr += '<br>';
    p++;
}
out.innerHTML = outStr;

/////////////////////////////////////////////////////////
//              Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить
//  в out-1 строку вида
// 1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача
//  решается с помощью цикла while.
let out1 = document.querySelector('.out1');
let h = 0;
document.querySelector('.b1').onclick = () => {
    while (h < 50) {
        h++;
        out1.innerHTML += ' ' + h;
    }
}
////////////////////////////////////////////////////////
//              Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить
//  в out-2 строку вида:
// 2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача
//  решается с помощью цикла while.
let out2 = document.querySelector('.out2');
let q = 0;
document.querySelector('.b2').onclick = () => {
    while (q < 122) {
        q += 2;
        out2.innerHTML += ' ' + q;
    }
}
////////////////////////////////////////////////////////
// Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить
//  в out-3 строку вида:
// 25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается
//  с помощью цикла while.
let out3 = document.querySelector('.out3');
let w = 25;
document.querySelector('.b3').onclick = () => {
    while (w >= 7) {
        out3.innerHTML += ' ' + w;
        w--;
    }
}
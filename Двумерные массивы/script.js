let a = [4, 5, 6];
let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(b);

// for (
//     let i = 0; i < b.length; i++) {
//         // console.log(b[i]);
//         let c = b[i];  // c- массив
//         for ( let k = 0; k < c.length; k++) {
//             console.log(c[k]);
//         }
// }
// for (let i = 0; i < b.length; i++) {
//     let c = b[i];
//     for ( let k = c.length - 1; k >= 0; k--) {
//         console.log(c[k]);
//     }
// }
// for ( let i = 0; i < b.length; i++) {
//     for (let k = 0; k < b[i].length; k++){
//         console.log(       b[i][k]     );
//     }
// }
let out = ' ';

for (let i = 0; i < b.length; i++) {
    for (let k = 0; k < b[i].length; k++) {
        out += b[i][k] + ' ';
    }
    out += '<br>';
}

document.querySelector('.out').innerHTML = out;

out2 = ' ';
for (let i = 0; i < b.length; i++) {
    for (let k = 0; k < b[i].length; k++) {
        if (b[i][k] > 4) {
            out2 += b[i][k] + ' ';
        }
    }
    out2 += '<br>';
}
console.log(out2);

//есть кнопка, при нажатии еденица должна передвинуться

let d = [1, 0, 0, 0, 0];
document.querySelector('.out3').innerHTML = d;
let k = 0;
document.querySelector('button').onclick = () => {
    if (k + 1 < 5) {
        d[k] = 0;
        d[k + 1] = 1;
        k++;
    }
    document.querySelector('.out3').innerHTML = d;
}
/////////////////////////////////////////////////////
// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна
//  вывести в out-1 значение 55 из массива a1. 
//  Возвратите это значение.
let a1 = [1, 11, 22, 55, 74];
let out11 = document.querySelector('.out11');

document.querySelector('.b1').onclick = () => {
    for (let i = 0; i < a2.length; i++) {
        if (a1[i] = 55) {
            out11.innerHTML = (a1[i]);
            return a1[i];
        }
    }
}
////////////////////////////////////////////////
//              Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна
//  вывести в out-2 значение hi из массива a2. 
//  Возвратите это значение.
let a2 = ['hello', 'hi', 'hola'];
let out22 = document.querySelector('.out22');
document.querySelector('.b2').onclick = () => {
    for (let i = 0; i < a2.length; i++) {
        if (a2[i] = 'hi') {
            out22.innerHTML = (a2[i]);
            return a2[i];
        }
    }
}
///////////////////////////////////////////////////
//               Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна
//  вывести в out-3 значение my из массива a3. Возвратите
//   это значение.
let a3 = ['our', 'your', 'my'];
let out33 = document.querySelector('.out33');
document.querySelector('.b3').onclick = () => {
    for (let i = 0; i < a3.length; i++) {
        if (a3[i] = 'my') {
            out33.innerHTML = (a3[i]);
            return a3[i];
        }
    }
}
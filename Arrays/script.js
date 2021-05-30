// let a = 'Иван';
// let b = '37';
// let z7 = 'Овен';
// let c = ['Иван', 37, 'Овен'];
// let d = [];
// console.log(c[0]);
// console.log(c[1]);
// console.log(c[5]);
// console.log(c);
// console.log(c.length);
// let a = 'Ivan';
// let b67 = '43';
// let iinumber = 2324;

// let zodiak = ['Козерог', 1, 1, 19];
// console.log(zodiak);
// let man = ['Ivan', 'male', 176, 93, 'Ivanov'];
// console.log(man);
// console.log(man.length);
// console.log(man[4]);
// man[0] = 'Sergey';
// console.log(man);

let a = [1, 2, 3, 4];
console.log(a);

let t = a[0];       //меняем местами  значения массива
a[0] = a[a.length - 1];
a[a.length - 1] = t;
console.log(a);
// вывод массива 1й вариант
// for (let i = 0; i < a.length; i++) {
//     document.querySelector('.out1').innerHTML += a[i] + ' ';
// }
//  2й вариант
let out = '';
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 ==0){   // выводит четные числа 
    out += a[i] + '_ _ ';
    }
}
document.querySelector('.out1').innerHTML = out;
//выводим найбольшее значение массива
let b = [4, 2, 5, 23, 43, 1, 2, 6, 12];
let max = b[0];
for (let i = 0; i < b.length; i++) {
    if (b[i] > max) {  // минимум отлич только знаком <
        max = b[i];
    }
}
console.log( 'max: ' + max);
//  выводим сумму массива
let sum = 0;
for (let i = 0; i < b.length; i++) {
       sum = sum + b[i];
}
console.log( 'sum: ' + sum);

///////////////////////////////////////////
//               Task 1
// Создайте массив ar1 содержащий строки, числа, булевы
//  значения. Выведите его в .out-1. Вывод - по нажатию
//   кнопки b-1
let ar1 = ['Ivan', 43, true];
let out11 = document.querySelector('.out11');
document.querySelector('.b1').onclick = () => {
    out11.innerHTML = ar1;
}
/////////////////////////////////////////////
//              Task 2
// Создайте массив ar2 содержащий строки, числа, булевы
//  значения. Выведите его в div.out-2. Используйте шаблон
//   вывода из кода в JS. Вывод - по нажатию кнопки b-2.


//////////////////////////////////////////////////////
// Task 3
// Создайте массив ar3, заполните его любыми значениями.
//  Выведите длину массива.
let ar33 = ['Maksim', 35, 176, 90, 'Козерог'];
let out33 =  document.querySelector('.out33');
document.querySelector('.b22').onclick = () =>{
out33.innerHTML = ar33.length;
}
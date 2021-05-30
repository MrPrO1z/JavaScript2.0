// 1========================
let arr = [4, 7, 9];
let allP = document.getElementsByTagName('p');
let qP = document.querySelectorAll('p');
console.log(arr);
console.log(allP);
console.log(qP);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// 2============================
// for ( let key in arr) {
//     console.log(arr[key]);
// }
// for of производит перебор массива сразу
//  по значениям 
for (let item of arr) {
    console.log(item);
}
// цикл for of работает так же с HTML Collection
for (let item of allP) {
    console.log(allP);
}
//          Task 1
// При нажатии .b-1 выполняете функцию f1.
//  Функция перебирает массив a1 c помощью 
//  цикла for (let i. Выведите на страницу 
//     в .out-1 формате значение+пробел.
let a1 = [1, 3, 5, 7, 9];
let out1 = document.querySelector('.out1');
let b1 = document.querySelector('.b1').onclick = () => {
    for (let i of a1) {
        out1.innerHTML += ' ' + i;
    }
}
//              Task 2
// При нажатии .b-2 выполняете функцию f2. Функция
//  перебирает массив a2 c помощью цикла
//   for (let i. Выведите на страницу в .out-2 
//     формате индекс+пробел+значение+пробел.
let out2 = document.querySelector('.out2');
let b2 = document.querySelector('.b2').onclick = () => {
    for (let i in a1) {
        // out2.innerHTML +=' ' + a1[i] + ' ';
        for (let k in i) {
            out2.innerHTML += ' ' + i + ' => ';

        }
        out2.innerHTML += ' ' + a1[i] + ' ' + '<hr>';
    }
}
//              Task 3
// При нажатии .b-3 выполняете функцию f3. Функция получает
//  div.out-3 со страницы с помощью getElementsByClassName
//   и в каждый записывает число 3, перезаписывая 
//   содержимое div.

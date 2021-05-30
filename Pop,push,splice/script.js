//////////////// метод push добавляет элемент в конец массива
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ['a','b', 'c', 'd', 'e', 'f'];

console.log(a.length);
console.log(a.push(10, 11, 44, 55, 66));
console.log(a);
b.push('j', 'e');
console.log(b);
////////////// метод pop удаляет последний элемент в массиве
console.log(b);
console.log(b.pop());
console.log(b.pop());
console.log(b);
///////// удалить элемент внутри массива
delete a[3];
console.log(a);
////////// splice позволяет вырезать элементы из масива
//  а также добавлять 3м параметром
a.splice(3, 4, 'hi');
console.log(a);
///////////////////////////////////////////////
//              Task 1
// Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1,
//  которая при нажатии читает i-1 и добавляем его в массив.
//   После чего выводит массив в .out-1. Поскольку мы будем
//    выводить массив d1 неоднократно, то давайте вывод 
//    массива сделаем отдельной функцией, showArr - она 
//    подготовлена. Изучите ее - это хороший способ 
//    оптимизировать код.
d1 = [33,'best', 66, 'best'];
let i1 = document.querySelector('.i1');
let out1 = document.querySelector('.out1');
let f1 = document.querySelector('.b1').onclick = () => {
    d1.push(i1.value);
    out1.innerHTML = d1;
}
/////////////////////////////////////////////////////////
//                  Task 2
// Напишите функцию f2, которая применяет метод pop к массиву
//  d1, а затем выводит его (showArr) в .out-2
let out21 = document.querySelector('.out21').innerHTML = d1;
let out2 = document.querySelector('.out2');
let f2 = document.querySelector('.b2').onclick = () => {
    d1.pop();
    out2.innerHTML = d1;
}
///////////////////////////////////////////////////////
//                  Task 3
// Напишите функцию f3, которая применяет метод shift к 
// массиву d1, а затем выводит его (showArr) в .out-3
let out3 = document.querySelector('.out3');
let f3 = document.querySelector('.b3').onclick = () => {
    d1.shift();
    out3.innerHTML = d1;
}
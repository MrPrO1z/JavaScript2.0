let one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '40px';

// console.log(one.style);
one.classList.add('two', 'three'); // присвоение класса
one.classList.remove('three'); // удаление класса

let toggle = document.querySelector('.toggle');
toggle.onclick = function () {
    this.classList.toggle('three');
}
// атрибуты data

console.log(one.getAttribute('data'));
console.log(document.querySelector('link').getAttribute('href'));

one.setAttribute('data-num', 6);

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}
//////////////////////////////////////////////////////
// создание элемента и присвоение
let a = document.createElement('div'); // создание элемента
a.innerHTML = 'Hello';
a.classList.add('one');
a.onclick = function () {
    alert('hello');
}
document.querySelector('.test').appendChild(a); // прсваиваем наше а к селектору .test
console.log(a);

///////////////////////////////////////////////////////
// Task 1
// Добавьте кнопку .b-1, которая запускает функцию f1.
//  Функция присваивает блоку .out-1 ширину 200px, высоту 40px.
let b1 = document.querySelector('.b1');
let out1 = document.querySelector('.out1');
b1.onclick = function () {
    out1.style.width = '150px';
    out1.style.height = '200px';
}
/////////////////////////////////////////////////////////
// Task 2
// По нажатию кнопки b-2 запускайте функцию f2, которая
//  присваивает блоку out-2 класс .bg-2.
let b2 = document.querySelector('.b2');
let out2 = document.querySelector('.out2');

b2.onclick = function () {
    out2.classList.add('bg-2'); // присвоение класса
}
////////////////////////////////////////////////////////
// Task 3
// По нажатию кнопки b-3 запускайте функцию f3, которая
//  удаляет у блока out-3 класс .bg-3
let b3 = document.querySelector('.b3');
let out3 = document.querySelector('.out3');
out3.classList.add('bg-3');
b3.onclick = function () {
    out3.classList.remove('bg-3'); // удаление класса
}
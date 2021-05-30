let a = new Set();
// a.push(2); не работает!
a.add(1);
a.add(2);
a.add('Hello');
a.add('1');// === идет строгая проверка 
// a.clear(); очищает набор
// a.delete('Hello'); +++ удаляет
console.log(a);
console.log(a[0]);// !!! set 
console.log(a.length);//!!! no!
console.log(a.size);// кол элем
console.log(a.has(2)); // проверка на наличие элемента
console.log(a.has('2')); // false

// for (let i = 0; i < a.size ) a[i]; not work!!!
// for ( let i in a ) !!! not work!!!
// для перебора наборов SET испорльзуют цикл for of 
for (let item of a) {
    console.log(item);
}

let arr = [1,2,3,4,5,'Hello',5,4,3,2,1,];
let b = new Set(arr);
console.log(b);
console.log(b.size);
// преобразование Set в массив -->
let bArr = Array.from(b);
console.log(bArr);
console.log(bArr[2]);

//               Task 1
// Создайте set s1. Добавьте в него три элемента
//  'h', 'b', 'o', 'h'. Добавление делайте через
//   add. Выведите в консоль получившийся набор 
//   (set) s1.
let s1 = new Set();
s1.add('h');
s1.add('b');
s1.add('o');
s1.add('h');
console.log(s1);

//              Task 2
// При нажатии b-2 выполняете функцию f2.
//  Функция должна добавить в набор s2 элементы,
//   которые пользователь вводит в i-2. Функция
//    должна выводить в консоль s2 после каждого
//     добавления элемента.
let s2 = new Set();

let b2 = document.querySelector('.b2').onclick = () => {
        let i2 = document.querySelector('.i2').value;
        s2.add(i2);
        console.log(s2);
}
//              Task 3
// При нажатии b-3 выполняете функцию f3. Функция 
// должна удалить из набора s3 строку, которую 
// пользователь вводит в i-3. Функция должна выводить
//  в консоль s3 после каждого удаления элемента.
let s3 = new Set();
s3.add('1');
s3.add('2');
s3.add('3');
s3.add('4');
s3.add('5');
s3.add('Hello');
console.log(s3);
let b3 = document.querySelector('.b3').onclick = () => {
    let i3 = document.querySelector('.i3').value;
    s3.delete(i3);
    console.log(s3);
}

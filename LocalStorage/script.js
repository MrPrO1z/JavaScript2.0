window.addEventListener('storage', function (c) {
    console.log('change');
    document.querySelector('.out').textContent = localStorage.getItem('b1');
})
localStorage.setItem('data', 5);
//извлекаем данные 
console.log(localStorage.getItem('data'));

const a = [3, 4, 5];
//записываем массив в хранилище
localStorage.setItem('a', JSON.stringify(a));
// получаем данные в массив b и выводим их
let b = localStorage.getItem('a');
b = JSON.parse(b);
console.log(b[0]);
//при сохранении массива в localstorage он 
//преобразуется в строку, для корректного сохранения 
//надо использовать JSON формат
console.log(typeof b);
const c = {
    hello: 5,
    k: 2,
    4: 'hi',
}
localStorage.setItem('c', JSON.stringify(c));
let d = localStorage.getItem('c');
d = JSON.parse(d);
console.log(d);
console.log(typeof d);
//              Task 1
// Создайте функцию t1 которая записывает в LS ключ 5
//  со значением 11. Проверьте что происходит при 
//  повторном вызове функции. Запускается ф-я по
//   кнопкуе b-1.
document.querySelector('.be1').onclick = function t1() {
    const f = ['l1']
    localStorage.setItem('5', JSON.stringify(f));
}
// t1();

//              Task 2
// Создайте функцию t2 которая записывает в LS массив
//  a2 = [7,6,5]. Ключ a2. Проверьте что происходит при 
//  повторном вызове функции. Запускается ф-я по кнопкуе b-2.
a2 = [7, 6, 5];
document.querySelector('.be2').onclick = function t2() {
    localStorage.setItem('a2', JSON.stringify(a2));
}
// t2();

// Task 3
// При нажатии кнопки t3 выведите из LS сохранненный массив a2.
//  Выведите в out-3 в формате ключ пробел значение перенос строки.
let out3 = document.querySelector('.out3');
document.querySelector('.t3').onclick = () => {
    localStorage.setItem('a2', JSON.stringify(a2));
    let h = localStorage.getItem('a2');
    h = JSON.parse(h);

    for (let i in h) {
        for (let k in i) {
            out3.innerHTML += '&nbsp;' + i + '&nbsp;';
        }
        out3.innerHTML += '&nbsp; ' + h[i] + '&nbsp; ' + '<br>';
    }
}
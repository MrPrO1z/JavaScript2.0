document.querySelector('.one').onclick = function (event) {
    console.log(event);
    console.log('click');
}
document.querySelector('.two').onclick = function () {
    console.log('click2');    
}
document.querySelector('.two').ondblclick = () => {
    console.log('double');
}
document.querySelector('.two').oncontextmenu = () => {
    console.log('right button');
    return false;
}
// let w = 75;
// document.querySelector('.three').onmousemove = () => {
//     document.querySelector('.three').style.width = w + 'px';
//     w++;
// }
document.querySelector('.three').onmouseenter = () => {
    document.querySelector('.three').style.background = 'red';
   console.log(1);
}
document.querySelector('.three').onmouseleave = () => {
    document.querySelector('.three').style.background = 'green';
    console.log(2);
}
document.querySelector('.three').onmousedown = () => {
    document.querySelector('.three').style.background = 'orange';
    console.log(3);
}
document.querySelector('.three').onmouseup = () => {
    document.querySelector('.three').style.background = 'blue';
    console.log(4);
}
let p = 10;
document.querySelector('button').onclick = function (event) {
    p++;
    document.querySelector('progress').value = p;
}
//          Task 1
// Добавьте на блок .div-1 событие клик и по клику запуск функции t1.
//  Функция должна возвращать и выводить на экран содержимое блока 
//  (только текст). Вывод осуществляется в out-1.
document.querySelector('.four').onclick = function t1() {
    document.querySelector('.onlytext').innerHTML = 'только текст';
}
//           Task 2
// Добавьте на блок .div-2 событие клик и по клику запуск функции t2.
//  Функция должна возвращать true или false в зависимости от того,
//   нажата ли клавиша alt или нет в момент клика. Также, выводите 
//   на экран результат. Вывод осуществляется в out-2.
document.querySelector('.five').onclick = function t2(e) {
    console.log(e.altKey);
}
//          Task 3
// Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину
//  блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов -
//   на 50px. Ширину выводите в out-3.
let cli = 10;
document.querySelector('.click').onclick = () => {
    document.querySelector('.cliclout').style.width = cli + '5px';
    cli++;
}
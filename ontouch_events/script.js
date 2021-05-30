document.querySelector('.block-1').addEventListener("touchstart", myTouch);
document.querySelector('.block-1').addEventListener("touchend", myTouchEnd);
document.querySelector('.block-2').addEventListener("touchmove", myTouchMove);
function myTouch(event) {
    console.log(event);
    console.log('touch');
    document.querySelector('.out-1').innerHTML = event.touches.length;
    document.querySelector('.out-2').innerHTML += 'work ';
}
function myTouchEnd(event) {
    document.querySelector('.out-3').innerHTML += 'end ';
}
function myTouchMove(event) {
    event.preventDefault();
    console.log(event);
    document.querySelector('.out-4').innerHTML += 'move ';
    return false;
}
//          Task 1
// Создайте блок div-1. Добавьте на него событие
//  touchstart. Выведите в out-1 слово touch
//   если событие сработает.
document.querySelector('.div-1').addEventListener("touchstart", myTouch);
function myTouch(event) {
    document.querySelector('.out-1').innerHTML += 'touch ';
}
//              Task 2
// Создайте блок div-2. Добавьте на него событие touchstart.
//  Выведите в out-2 число срабатываний события.
document.querySelector('.div-2').addEventListener("touchstart", myTouch);
function myTouch(event) {
    document.querySelector('.out-2').innerHTML += event.touches.length;
}
//              Task 3
// Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart.
//  Выведите в out-3 номер блока 1 или 2 на котором сработало событие.
document.querySelector('.div-3_1').addEventListener("touchstart", myTouch1);
document.querySelector('.div-3_2').addEventListener("touchstart", myTouch2);
function myTouch1(event) {
    document.querySelector('.out-3').innerHTML += '1';
}
function myTouch2(event) {
    document.querySelector('.out-3').innerHTML += '2';
}
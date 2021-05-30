//рекурсия это вызов функции самой себя
// рекурсия может вызвать зацикленность и зависание программы
// для этого ставим условия 
let a = 0;
function rec() {
    a = a + 2;
    console.log(a);
    if (a > 99) {
        return a;
    }
    rec();
}
rec();
// рекурсия часто применяется в анимации
let offset = 0;
function move() {
    offset = offset + 5;
    document.querySelector('.test-2').style.left = offset + 'px';
    if (offset > 500) {
        return true;
    }
    // вызов функции самой себя через таймаут для наглядного отображения
    setTimeout(move, 500);
}
document.querySelector('.b-1').onclick = move;
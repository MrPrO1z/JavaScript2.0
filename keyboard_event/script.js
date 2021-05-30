document.querySelector('.i-1').onkeypress = function (event) {
    console.log('keypress');
    console.log('charCode' +event.charCode);
    console.log('code' +event.code);
    // console.log(event);
}
document.querySelector('.i-1').onkeydown = function (event) {
    console.log('keydown');
    console.log('charCode' +event.charCode);
    console.log('code' +event.code);
    // console.log(event);
    if(event.key == 'CapsLock') {
        document.querySelector('.ch-1').checked = true;
    }
    else {
        document.querySelector('.ch-1').checked = false;

    }
}
document.querySelector('.i-1').onkeyup = function (event) {
    console.log('keyup');
    console.log('charCode' +event.charCode);
    console.log('code' +event.code);
    // console.log(event);
}
document.querySelector('.i-2').onkeypress = function (event) {
    console.log('keypress');
    console.log('charCode' +event.charCode); 
    console.log('code' +event.code);        //
    // console.log(event);
    const a = {
        q: 'w',
        w: 'e'
    }
    // получаем смещение в 1 символ
    document.querySelector('.i-2').value += a[event.key];
    return false;
}
//           Task 1
// Дан input .i-1. Напишите функцию t1, которая
//  выводит в .out-1 символ и возвращает его.
//   Во всех последующих задачах - работаем с
//    латиницей и цифрами.
document.querySelector('.i-3').onkeypress = function (event) {
    console.log('keypress');
    console.log('charCode' +event.charCode);
    console.log('code' +event.code);
    // console.log(event);
    document.querySelector('.out3').innerHTML = event.key;
    return event.key;
}
//              Task 2
// Дан input .i-2. Напишите функцию t2, которая по событию
//  onkeypress выводит в out-2 числовой код символа 
//  (event.keyCode).
document.querySelector('.i-4').onkeypress = function (event) {
    console.log('keypress');
    console.log('charCode' +event.charCode);
    console.log('code' +event.code);
    // console.log(event);
    document.querySelector('.out4').innerHTML = event.keyCode;
    return event.keyCode;
}
//               Task 3
// Дан input .i-3. Напишите функцию t3, которая выводит на 
// страницу true если введен символ и false если цифра. Для
//  определения - используйте keyCode.
document.querySelector('.i-5').onkeypress = function (event) {
    // console.log('keypress');
    // console.log('charCode' +event.charCode);
    // console.log('code' +event.code);
    console.log(event);
    if(event.keyCode >= 58 ) {
        document.querySelector('.out5').innerHTML = true;
    }
    else {
        document.querySelector('.out5').innerHTML = false;

    }
    return event.keyCode;
}
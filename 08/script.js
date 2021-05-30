// let a = 6;

// if (a <= 9) {
//     console.log('Yes');
// }
// else {
//     console.log('else');
// }

const button = document.querySelector('button');

const input = document.querySelector('.age');

button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log('wellcome');
    }
    else if (num > 60) {
        console.log('ты точно сюда?');
    }
    else {
        console.log('Ты не пройдешь');
    }


    switch (num) {
        case 15:
            console.log('еще год потерпи!');
            break;
        case 16:
            console.log('Ураааа можно!!!');
            break;
        default:
            console.log('oooooK!');
    }
}

////////////////////////////  use range  //////////
//////// пример дииапазаона ////////

let b = 5;

console.log(b > 3 && b < 7);   // оператор И  &&
console.log(b == 3 || b == 7);   // оператор или ||

///////////////// ДЗ //////////////////////////////////

// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. 
// Функция должна прочитать содержимое i-1 и 
// сравнить его с числом 4 (сравнение ==).
//  Результат сравнения - true или false выведите в out-1.

const butt = document.querySelector('.b1');

const inp = document.querySelector('.i1');


butt.onclick = () => {
    let out1 = +inp.value;
    if (out1 == 4) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}

////////////////////////////////////////////////////////////

// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается
//  функция f2. Функция должна сравнить переменные с помощью if else и 
//  вывести в out-2 число, которое больше. Вариант равенства переменных
//   не рассматриваем.

function f2(a21, a22) {

    if (a21 < a22) {
        return a22;

    } else {
        return a21;
    }
}
console.log (f2(12, 22));



/////   Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».

function hello1() {
    alert('Привет, JavaScript!');
}

let hell = hello1();



///////   Напишите функцию hello2(), которая при вызове будет
// принимать переменную name (например, «Василий») и выводить
// строку (в нашем случае «Привет, Василий»).  В случае
// отсутствующего аргумента выводить «Привет, гость»


function hello2() {
    let name = 'Vasya';
    alert('hello ' + name);
}
let call1 = hello2();


// Напишите функцию mul(n,m), которая принимает два аргумента
//  и возвращает произведение этих аргументов. Проверьте ее работу.

function mul(n, m) {
    return n + m;
}

let result = mul(1, 2);
alert(result);


//   Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.


function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}
let numb11 = min(5, 8);
alert(numb11);

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(x, n) {
    let num = Math.pow(x, n);
    return num;
}

let math11 = pow(7, 2);
alert(math11);


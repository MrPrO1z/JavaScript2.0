let a = 5;
a = a * 2;

try {
    document.querySelector('.test').innerHTML = a;
}
//если нет ошибки блок catch  пропускается 
catch (err) {
    console.log('1');
}
// блок finaly выполняется гарантировано не завися
//  от того работает код в try или нет
// этот юлок не является обязательным
finally {
    console.log('программа работает');
}
t1();
console.log(a);



function t1() {
    console.log('Hello');
}
//          Task 1
// Добавьте в код функции try catch так, чтобы
//  вместо ошибки выводилось в out-1 цифра 1.
try {
    document.querySelector('.test1').innerHTML = a;
}
catch (err) {
    document.querySelector('.out-1').innerHTML = '1';
}
// Task 2
// Добавьте в код функции try catch так, чтобы вместо
//  ошибки был вывод результата в out-2.
b = 5;
try {
    function t2() {
        document.querySelector('.test2').innerHTML = b;
    }
    t2();

}
catch (err) {
    document.querySelector('.out-2').innerHTML = '1';
}
//          Task 3
// Добавьте в код функции try catch так, чтобы вместо ошибки
//  был вывод результата в out-3. Если его нет - создавайте
//   в коде. т.е. вы не знаете будет или нет он в html.
let div = document.createElement('div');
let g = 8;
try {
    function t3() {
        document.querySelector('.tst3').innerHTML = g;
    }
    t3();

}
catch (err) {
    div.innerHTML = g;
}
document.body.append(div);
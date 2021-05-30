const a = {
    "a": 5,
    "b": 'Hello',
    "z2": 'Hi',
    y43: 1999,
    'vila de': 3040,
};
a.yyy = 555; // добавление элемента
a.b = 'uuu'; // перезаписись значения ключа
delete a.a; // удаление по ключу 
console.log(a);
console.log(a.z2); // вывод значения ключа
let k = 'y43';
console.log(a[k]); // вывод значения если ключ был присвоен переменной 

// document.querySelector('.out').innerHTML = a; так вывести массив нельзя
let out = '';
for (let key in a) {
    out += key + ' --- ' + a[key] + '<br>';
}
document.querySelector('.out').innerHTML = out;
////////////////////////////////////////////////////
//                  Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна
//  вывести в out-1 значение сохраненное под ключем two
//   из массива a1. Возвратите это значение.
let a1 = {
    "one": 15,
    "two": 16,
    "five": 20
};

let f1 = document.querySelector('.b1').onclick = () => {

    document.querySelector('.out1').innerHTML = a1.two;
    return a1;
}
//////////////////////////////////////////////////////
//              Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна
//  вывести в out-2 значение hi из массива a2. Возвратите
//   это значение.
let a2 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi"
};
let f2 = document.querySelector('.b2').onclick = () => {
    for (let key in a2) {
        if (key = "hi") {
            document.querySelector('.out2').innerHTML = key;
            // console.log(key);
            return key;
        }
        // out2 +=a2[key] + '<br>';
        // document.querySelector('.out2').innerHTML = out2;
        // return a2;
    }
}
////////////////////////////////////////////////////
//              Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна 
// вывести в out-3 значение hi из массива a3. Возвратите
//  это значение. Вывод - через пробел.
let a3 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi"
};
out3 = '';
let f3 = document.querySelector('.b3').onclick = () => {
    for (let key in a3) {
        out3 += a3[key] + '<br>';
        document.querySelector('.out3').innerHTML = out3;
        
    }
    return out3;
}

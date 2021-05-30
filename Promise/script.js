//промисы позволяют упорядочено выводить асинхронные запросы
let a = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php')
        .then(data => {
            console.log(data);
            resolve(data.text());
        })
});
a.then(data => {
    console.log(data);
})

let b = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php')
        .then(data => {
            console.log(data);
            resolve(data.text());
        })
});
// запросы групируются в массив с которым мы можем  удобно работать
// Promise.all([a, b]).then(value => {
//     console.log(value);
//     console.log(value[0]);
//     console.log(value[1]);
// })
//          Task 1
// Отправьте GET запрос на сайт
//  http://getpost.itgid.info/index2.php.
//   В качестве action укажите 1.

// Отправьте GET запрос на сайт
//  http://getpost.itgid.info/index2.php.
//   В качестве action укажите 2.

// Два запроса объедините с помощью promiseAll.
//  Результат выведите в out-1 результат.
//   Запускаться функция должна по нажатию b-1.
let c = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php')
        .then(data => {
            // console.log(data);
            resolve(data.text());
        })
});
let d = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?action=1')
        .then(data => {
            // console.log(data);
            resolve(data.text());
        })
});
document.querySelector('.b1').onclick = () => {
    Promise.all([a, b]).then(value => {
        document.querySelector('.out1').innerHTML = value[0];
        document.querySelector('.out2').innerHTML = value[1];
    })
}
fetch('http://getpost.itgid.info/index2.php')
    // короткий способ
    // .then(data => data.text())
    // .then(data => {
    //     console.log(data);
    // })
    .then(data => {
        console.log(data);
        return data.text();
    })
    .then(data => {
        console.log(data);
    })
//метод пост // ошибка нет ключа
// fetch('http://getpost.itgid.info/index2.php', {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify() // body data type must match "Content-Type" header
//   })
//   .then(response => response.text())
//   .then(response => {
//       console.log(response);
//   })
//               Task 1
// Отправьте GET запрос (fetch) на сайт
//  http://getpost.itgid.info/index2.php. В качестве action
//   укажите 1. Выведите в out-1 результат. Запускаться функция
//    должна по нажатию b-1.
document.querySelector('.b1').onclick = () => {
    fetch('http://getpost.itgid.info/index2.php?action=1')
        .then(data => {
            console.log(data);
            return data.text();
        })
        .then(data => {
            document.querySelector('.out1').innerHTML = data;
        })
}
// Task 2
// Отправьте GET запрос (fetch) на сайт
//  http://getpost.itgid.info/index2.php. 
//  В качестве action укажите 2. Добавьте параметр name 
//  с вашим именем на латинице. Если все сделано верно,
//   сервер пришлет строку hello ваше имя. Выведите в out-2
//    результат. Запускаться функция должна по нажатию b-2.

// Task 3
// Отправьте GET запрос (fetch) на сайт
//  http://getpost.itgid.info/index2.php. В качестве action 
//  укажите 3. Добавьте параметр num1 и num2 содержащие числа.
//   Если все сделано верно, сервер вернет сумму чисел.
//    Выведите в out-3 результат. Запускаться функция должна по 
//    нажатию b-3.
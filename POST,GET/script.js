// создаем запрос
let xhttp = new XMLHttpRequest();
// выполняем проверку запроса
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText)
    }
}
// открывает GET запрос
xhttp.open("GET", "https://getpost.itgid.info/index2.php", true);
// посылаем GET  запрос
xhttp.send();
// данные запроса в консоль 
function myFunction(data) {
    console.log(data);
}
// делаем втрой запрос
let xhttp2 = new XMLHttpRequest();
// аналогичная проверка
xhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction2(this.responseText)
    }
}
// открываем 
xhttp2.open("POST", "https://getpost.itgid.info/index2.php", true);
// посылаем POST запрос указывая заголовки 
xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp2.send();
function myFunction2(data) {
    console.log(data);
}

//               Task 1
// Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
//  В качестве action укажите 1. Выведите в out-1 результат.
//   Запускаться функция должна по нажатию b-1.
let xhttp3 = new XMLHttpRequest();
// выполняем проверку запроса



document.querySelector('.b1').onclick = function myFunction3(data) {
    xhttp3.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction3(this.responseText);
        }
    }
    // открывает GET запрос
    xhttp3.open("GET", "https://getpost.itgid.info/index2.php", true);
    // посылаем GET  запрос
    xhttp3.send();
    document.querySelector('.out1').innerHTML = data;
}
//              Task 2
// Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. 
// В качестве action укажите 2. Добавьте параметр name с вашим именем 
// на латинице. Если все сделано верно, сервер пришлет строку hello ваше
//  имя. Выведите в out-2 результат. Запускаться функция должна по 
//  нажатию b-2.

//               Task 3
// Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
//  В качестве action укажите 3. Добавьте параметр num1 и num2
//   содержащие числа. Если все сделано верно, сервер вернет сумму чисел.
//    Выведите в out-3 результат. Запускаться функция должна по нажатию b-3.
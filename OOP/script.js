function myAlert(a, c, d) {
    let b = `<p class="${c}">${a}</p>`
    document.querySelector(d).innerHTML = b;
}
myAlert('Hi', 'red', '.test');
myAlert('Hello', 'orange', '.test2');

// создаем класс в Alert.js

// создаем класс который будет расширять возможности класса Alert
// Alert2.js

let m = new Alert('My messege', 'red', '.test');
console.log(m);
// для вызова метода надо имя объекта и имя метода
m.showAlert();

let m2 = new Alert2('My messege', 'red', '.test', 'shopping_cart');
m2.showIconAlert();
m2.myAlert(this.messege);

//          Task 1
// Создайте класс Goods. Класс должен содержать свойства
//  name, amount. Создайте на его основе объект goods. 
//  Выведите в консоль созданный объект. Помните, все 
//  классы - в отдельных файлах. Имена классов с большой 
//  буквы.
//////////////////////////////////////
//           Task 2
// Добавьте в класс Goods свойства image и count - картинка
//  и количество на складе.
/////////////////////////////////////////
//              Task 3
// Добавьте в класс Goods метод draw, который будет выводить
//  div с изображением, названием товара, ценой - в указанный
//   элемент (дозапись).
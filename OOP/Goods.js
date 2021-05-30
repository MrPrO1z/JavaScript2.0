//              Task 1
// Создайте класс Goods. Класс должен содержать свойства
//  name, amount. Создайте на его основе объект goods. 
//  Выведите в консоль созданный объект. Помните, все 
//  классы - в отдельных файлах. Имена классов с большой 
//  буквы.
//               Task 2
// Добавьте в класс Goods свойства image и count - картинка
//  и количество на складе.

//               Task 3
// Добавьте в класс Goods метод draw, который будет выводить
//  div с изображением, названием товара, ценой - в указанный
//   элемент (дозапись).
let n = `<span>Ge Force 3060 RTX</span>`
let am = `<span> 9999грн. </span>`;
class Goods {
    constructor(name, amount, image, count, out) {
        this.name = n;
        this.amount = am;
        this.image = image;
        this.count = count;
        this.out = '.test3';
        this.cssClass = 'green';
    }
    myDraw() {
        document.querySelector(this.out).innerHTML = 
        `<div><p class="${this.cssClass}"><span class="material-icons">${this.image}</span><span>${this.name}</span><span>${this.amount}</span></p></div>`;
    }
}
let goods = new Goods('name', 'amount', 'shopping_cart', 'count', 'out', 'green');
console.log(goods);
goods.myDraw();

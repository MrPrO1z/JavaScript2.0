let a = [4, 5, 12, 200, 1, 0, -2];
// let b = a.map(function(item, index){
//     // console.log(index);
//     return item * 5;
// })
//сокращенная запись
let b = a.map(item => item * 5);
console.log(b);

let c = a.filter(function (item, index) {
    if (item % 2 == 0) {
        return true;
    }
})
console.log(c);

//              Task 1
// Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]
//  - с помощью map переберите массив и создайте новый
//   массив a1_res куда добавьте элементы данного 
//   массива умноженные на 2. Возвратите массив a1_res.
a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
console.log(a1);
let a1_res = a1.map(function (item, index) {
    return item * 2;
})
console.log(a1_res);
//          Task 2
// Дан массив a2= [2,3,4,5,10,11,12] - с помощью map 
// переберите массив и создайте массив a2_res куда 
// добавьте элементы данного массива возведенные во 
// вторую степень. Возвратите массив a2_res. Действия
//  должны запускаться при вызове функции t2.
a2 = [2, 3, 4, 5, 10, 11, 12];
console.log(a2);

function t2() {
    let a2_res = a2.map(function (item, index) {
        return item ** 2;

    })
    console.log(a2_res);
}
t2();
//               Task 3
// Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11] 
// - с помощью map переберите массив и создайте массив
//  a3_res куда добавьте все элементы преобразованные
//   к числу. Возвратите a3_res. Действия должны 
//   запускаться при вызове функции t3.
a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
console.log(a3);
function t3() {
    let a3_res = a3.map(function (item, index) {
        return Number(item);

    })
    console.log(a3_res);
}
t3();
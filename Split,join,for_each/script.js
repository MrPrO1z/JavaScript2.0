let a = 'hello,hi,mahai';
console.log(a.split(','));
let b = [8, 9, 7];
console.log(b);
console.log(b.join('-'));
b.forEach(function(elem, index){
    console.log(index);
    console.log(elem * 2);
    console.log('--');
})
console.log(b);

//           Task 1
// Дан массив a1 = [4,5,6,7,12,34,56,78,90,11]
//  - с помощью forEach переберите массив и создайте
//   новый массив a1_res куда добавьте элементы
//    данного массива умноженные на 2. Действия 
//    должны запускаться при вызове функции t1.
let a1 = [4,5,6,7,12,34,56,78,90,11];
console.log(a1);
function t1(){
let a1_res = a1;    
a1_res.forEach(function(elem, index){
    console.log(index);
    console.log(elem * 2);
})
}
t1();
//          Task 2
// Дан массив a2 = [2,3,4,5,10,11,12] - с помощью
//  forEach переберите массив и создайте новый массив
//   a2_res куда добавьте элементы данного массива 
//   деленные на 2. Действия должны запускаться при 
//   вызове функции t2.
let a2 = [2,3,4,5,10,11,12];
console.log(a2);
function t2(){
    let a2_res = a2;
    a2_res.forEach(function(elem, index){
        console.log(index);
    console.log(elem / 2);
    })
}
t2();
//          Task 3
// Дан массив a3 = [2, "hello", 3, "hi", 4, "Mazai"]
//  - с помощью forEach переберите массив и создайте
//   новый массив a3_res куда добавьте элементы
//    данного массива являющиеся числом. Запускаться
//     решение должно при вызове функции t3.
let a3 = [2, "hello", 3, "hi", 4, "Mazai"];
function t3(){
    let a3_res = a3.filter(Number);
    console.log(a3_res); 
}
t3();
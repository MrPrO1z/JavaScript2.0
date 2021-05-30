//замыкание это замыкание обл видимости переменной
//мы не можем обратиться к переменной или повлиять на нее вне блока
function t1() {
    let a =0;
    return function() {
        a = a + 1;
        return a;
    }
}

let b = t1();
let c = t1();
console.log(b);
console.log(b());
a = 77;
console.log(c());
console.log(b());
console.log(c());
console.log(b());
console.log(c());

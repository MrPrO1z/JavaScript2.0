// document.querySelector('button').onclick = funktion() = {   запись анонимной функции.


// }   //  если функция будет использоваться 1 раз это целессобразно

// document.querySelector('button').onclick = () => {    пример стрелочной функции

// } стрелочные функции применяются там где анонимные 

document.querySelector('.but').onclick = myBut;   // запись обычной функции

function myBut() {                                          // получаем элемент по айдишнику
    // через .value указываем получить только его значение
    console.log(document.querySelector('#one').value);
}

document.querySelector('.color').onclick = myCol;   // аналогичная функция только получаем значение цвета

function myCol() {                                          // получаем элемент по айдишнику
    // через .value указываем получить только его значение
    console.log(document.querySelector('#two').value);
    // style
    document.querySelector('.color').style.backgroundColor = //присваиваем кнопке цвет который мы вмбираем
        document.querySelector('#two').value
}

document.querySelector('.date').onclick = myDat;         // аналогичный пример получения значения даты

function myDat() {
    console.log(document.querySelector('#three').value);
}

document.querySelector('#four').oninput = () => {
    console.log(document.querySelector('#four').value);
    document.querySelector('span').innerHTML = document
        .querySelector('#four').value
}

document.querySelector('#btn-1').onclick = myCheck;
function myCheck() {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Нажат');
    }
    else {
        console.log('Не нажат');
    }
}
document.querySelector('#btnArea').onclick = myArea;
function myArea() {
    let text = document.querySelector('#twoArea');
    console.log(text.value);
    text.value = 'one';
}

///////////////////// form  ///////////////////////////

document.querySelector('#btnArr2').onclick = myAreaForm;
function myAreaForm(event) {                                // первый раз передаем в парам функ событие event
    event.preventDefault();                                 // отменяем стандартную перезагрузку формы при нажатии кнопки
    // let text = document.querySelector('#oneArea');        // методом   event.preventDefault()
    // console.log(text.value);
    // text.value = 'one';
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.oneArea.value);
    console.log(form.elements.textForm.value);
}

//////////////////////////////////////////////////////////////////
// Task 1
// Создайте button.b-1 - при нажатии на него выводите alert с номером задачи.
document.querySelector('#b1').onclick = myTask1;

function myTask1() {
    alert('Task 1')
}

/////////////////////////////////////////////////////////////////////
// Task 2
// Создайте input.b-2 type=button - при нажатии на него выводите alert
//  с номером задачи. Номер задачи просто пропишите вручную.
document.querySelector('#b2').onclick = myTask2;

function myTask2() {
    alert('Task 2');
}

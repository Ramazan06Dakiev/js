let name = 'Ramazan';
const date = 1998;

function showMessage() {
    let message =  'Здравствуйте, ' + name;
    
    alert(message);
};
showMessage();

// Вывод последовательности чисел включая крайние
alert('Выведем в консоли последовательность чисел ');
let start = prompt('от'); //ведем начальное значение
let end = prompt('до'); //ведем конечное значение

for (i = start; i <= end; i++) { // Сравниваем существующее значение и выполняем условия
    console.log(i); // Вывод массива
};

console.log('Следующая функция'); //Для разделения функций

// Вывод четной последовательности чисел включая крайние
alert('Выведем в консоли последовательность четных чисел ');
let  startArray= prompt('от'); //ведем начальное значение
let  endArray= prompt('до'); //ведем конечное значение

for (i = startArray; i <= endArray; i++) {// Сравниваем существующее значение и выполняем условия
    if (i % 2 == 0) { //дополнительное условие
        console.log(i); // Вывод массива
    };
    
};

console.log('Следующая функция'); //Для разделения функций

//  Нахождение среднего арифметического
alert('Найдем среднее арифметическое чисел');
let a =+ prompt('a');
let b =+ prompt('b');

function average() {
    return ((a + b) / 2);
};
alert(average());

console.log('Следующая функция'); //Для разделения функций

//  Нахождение квадрата
alert('Найдем квадрат числа');
let x =+ prompt('x');

function square() {
    return ( x ** 2);
};
alert(square());

console.log('Следующая функция'); //Для разделения функций

//  Нахождения куба элемента
alert('Найдем куб числа');
let y =+ prompt('y');

function cube() {
    return (y ** 3);
};
alert(cube());


// Нахождение массива средне арифметических значений квадрата и куба 
alert('Выведем в консоли массив средне арифметических значений квадрата и куба от 0 до 9');

    let startFunc = 0;
    let endFunc = 9;

    for (i = startFunc; i <= endFunc; i++) {
    
        function calculate(){
            let square = (i ** 2);
            let cube = (i ** 3);
            let average = ((square + cube) / 2);
            return(average);
        };
        console.log(calculate());
    };
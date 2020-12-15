
// Нахождение факториала с циклом while
let number = prompt('');
function factorialN(n) {
    number = n;
    while(n > 1) {
        n = n - 1;
        number = number * n;
     }  
      return number;  
}
alert(factorialN(number));


// Нахождение факториала с циклом for
let result = prompt('');
function factorialX(x) {
    result = x;
    for( let i = x - 1; i > 1; --i) {
        result *= i;
    }
    return result;
}
alert(factorialX(result));


// Расчет разницы суммы квадрата и квадрата суммы

let n = prompt('Разница суммы квадрата и квадрата суммы числа:', '10');  
function sumSquareDifference(n){    

    let sumSquare = 0; 
    let squareSum = 0;                 

    for (let i = 1; i <= n; i++) {      
        sumSquare += i**2; 
        squareSum += i;
    };
    return squareSum**2 - sumSquare;   
};
 alert(sumSquareDifference(n));


 //объект с одним полем name и с присвоенной его в const
const objectFirst = {
    name: 'Marcus',
};
objectFirst.name = 'Anna';
alert(objectFirst.name); // выдаст Anna, так как мы поменяли не содержимое обьекта, а значение name

//объект с одним полем name и с присвоенной его в let
let objectSecond = {
    name: 'Donald',
};
objectSecond.name = 'Joseph';
alert(objectSecond.name); //аналогично выдаст Joseph, так как мы поменяли не содержимое обьекта, а значение name

// функция createUser
let  user = {
    name: "Marcus Aurelius",
    city: "Roma",

    createUser()  {
        alert(`name: '${user.name}', city: '${user.city}'`);
    }
    
};
user.createUser();

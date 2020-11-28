//Пытался сделать так, но при такой конструкции не выводит NaN при 0, не понял почему, решил оставить этот код, может есть ошибка которую не увидел

// let number = prompt('');
// let smallestDivisor = 2;
// while (x = number / smallestDivisor) {
//     if (number % smallestDivisor == 0){
//         alert(smallestDivisor);
//         break;
//     } else if (number < 1) { 
//         alert('NaN');
//         break;
//     } else if (number == 1) {
//         alert(1);
//         break;
//     } else {
//         smallestDivisor++;
//     };
// };



let number = prompt('');
let smallestDivisor = 2;
if (number < 1) {
    alert('NaN');
} else if (number == 1) {
    alert('1');
} else {
    while (x = number / smallestDivisor) {
        if (number % smallestDivisor == 0){
            alert(smallestDivisor);
            break;
        } else {
            smallestDivisor++;
        };
    };
};



// следующая задача

let x = prompt('');
function isPrime(x) {       
    if (x <= 1){
         return false;
    }
    for (let i = x - 1; i > 1; i--) { 
        if (x % i == 0) {    
            return false;  
        };
    };
    return true;      
};    
alert(isPrime(x));





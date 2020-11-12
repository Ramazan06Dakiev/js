// 1 часть, тернарный оператор
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
let answer = (year < 2015) ? 'Это слишком рано...' :
    (year > 2015) ? 'Это поздновато!' :
     'Верно!' ;
alert( answer );
// 2 часть, конструкция if, else
let age = prompt('Возраст?', 18);
if (age < 3) {
    alert( 'Здравствуй, малыш!' );
} else if (age < 18) {
    alert( 'Привет!' );
} else if (age < 100) {
    alert( 'Здравствуйте!' );
} else {
  alert( 'Какой необычный возраст!' );
}


// функция finalGrade() 
let exam = prompt('Оценка за экзамен(число от 0 до 100):', '');
let projects = prompt('Количество проектов:', '');
let sum = ( exam > 90 || projects > 10) ? 'Оценка: 100' :
    ( exam > 75 && projects > 10) ? 'Оценка: 100' :
    ( exam > 90 && projects >= 5) ? 'Оценка: 90' :
    ( exam > 50 && projects >= 2) ? 'Оценка: 75' :
    'Оценка: 0';
    alert( sum );

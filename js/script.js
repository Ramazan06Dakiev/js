// Функция для переворота строки
const reverse = (str) => {
    let result = '';
    let i = str.length;

    for( ;i > 0; result += str[i]) {
        // debugger;
        i -= 1;
    }
    return result;
}   
alert(reverse(prompt('Введите строку для переворота', '')));
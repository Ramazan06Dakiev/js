let lightButton = document.querySelector('.light-button');
console.log(lightButton);
lightButton.onclick = function () {
    document.querySelector('.light-button');
    console.log('кнопка нажата!'); 
};

let paragraph = document.querySelector('.paragraph');
console.log(paragraph);

let input = document.querySelector('.input');
lightButton.onclick = function () {
    paragraph.textContent = input.value;
    console.log(input.value);
};

let x = 55 * (7 + 2) / (4 + 2);
alert( x );

let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function () {
    counter++;
    likesNumber.textContent = counter;
    heart.classList.toggle('added');
      
      
};





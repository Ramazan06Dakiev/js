let page = document.querySelector('.page');
console.log(page);
page.classList.remove('second-page'); 

let lightButton = document.querySelector('.light-button');
console.log(lightButton);
lightButton.onclick = function () {
    document.querySelector('.light-button');
    document.querySelector('.light-button').classList.add('light');
    console.log('кнопка нажата!'); 
};

let message = document.querySelector('.text');
console.log(message.textContent);
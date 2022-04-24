let inpt = document.querySelector('.input');
const button = document.getElementById('btn');
const cards = document.querySelector(".cards");

button.addEventListener('click', ()=>{
    createCard(inpt.value);
    console.log(inpt.value);
    inpt.value = "";
});

function createCard(i){
    let card = document.createElement('div');
    let text = document.createTextNode(i);
    card.classList.add('card');

    card.appendChild(text);
    cards.appendChild(card);
}

function fibonacci(num){
    
}
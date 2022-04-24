let inpt = document.querySelector('.input');
const button = document.getElementById('btn');
const cards = document.querySelector(".cards");

let array = new Array;

button.addEventListener('click', ()=>{
    fibonacci(inpt.value);
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
    let n, number=0, nextNumber=1;
    for (let index = 1; index <=num; index++) {
        createCard(number);
        n = number + nextNumber;
        number = nextNumber;
        nextNumber = n;
    }
}

const del = (e)=>{
    let item = e.target;
    let msg = `¿Quieres eliminarlo?`;
    if(confirm(msg) == true){
        item.remove();
    }
}

cards.addEventListener('click',(e)=>{
    del(e);
});
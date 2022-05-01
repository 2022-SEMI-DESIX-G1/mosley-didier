((Utils) =>{
    const App = {
        htmlElements: {
            inpt: document.querySelector('.input'),
            button: document.getElementById('btn'),
            cards: document.querySelector(".cards")
        },
        init: () => {
            App.htmlElements.button.addEventListener('click', App.handlers.onFiboClick);
            App.htmlElements.cards.addEventListener('click', App.handlers.onCardClick);
        },
        utils: {
            ...Utils.methods,
        },
        template: {
            newCard: (i) =>{
                let card = document.createElement('div');
                let text = document.createTextNode(i);
                card.classList.add('card');

                card.appendChild(text);
                App.htmlElements.cards.appendChild(card);
            }
        },
        handlers: {
            onCardClick: (e) => {
                let item = e.target;
                let msg = `¿Quieres eliminarlo?`;
                if (confirm(msg) == true) {
                    item.remove();
                }
            },
            onFiboClick: () => {
                let num = App.htmlElements.inpt.value;
                let n, number = 0, nextNumber = 1;
                for (let index = 1; index <= num; index++) {
                    
                }
                App.htmlElements.inpt.value = "";
            }
        }
    };
    App.init();
})(document.Utils);
window.addEventListener("load", () => {
    //DOM elements
    const divNumber = document.querySelector('#number');
    const divCardIcon = document.querySelector('#icon');
    const divCardIconInvert = document.querySelector('#icon_invert');
    const btnChangeCard = document.querySelector('#btn_change');
    const card = document.querySelector('#card');
    const inputWidth = document.querySelector('#inputW');
    const inputHeight = document.querySelector('#inputH');

    //const
    const cardsClass = ['♣', '♦', '♠', '♥',];
    let lastChangeTime = 0;

    const changeCard = () => {
        //add and remove flip class to make it rotate
        card.classList.toggle('flip');

        //time
        lastChangeTime = Date.now();

        // reset red color to black
        divCardIcon.style.color = 'black';
        divCardIconInvert.style.color = 'black';
        divNumber.style.color = 'black';

        // randomly add icons
        const indexCardIcon = cardsClass[Math.floor(Math.random() * 4)];
        divCardIcon.innerHTML = indexCardIcon;
        divCardIconInvert.innerHTML = indexCardIcon;

        // randomly add numbers
        let number = Math.floor((Math.random() * 13) + 1);
        let cardValues = [null, 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
        let cardNumber = cardValues[number];
        divNumber.innerHTML = cardNumber;

        //Heart card and diamond are red
        if (indexCardIcon == '♥' || indexCardIcon == '♦') {
            divCardIcon.style.color = 'red';
            divCardIconInvert.style.color = 'red';
            divNumber.style.color = 'red';
        }
    };

    //change the width of the card
    inputWidth.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            card.style.width = `${e.target.value}px`;
            e.target.value = '';
        }
    });

    inputHeight.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            card.style.height = `${e.target.value}px`;
            e.target.value = '';
        }
    });

    btnChangeCard.addEventListener('click', changeCard);

    //Change the card by clicking on it
    card.addEventListener('click', changeCard);

    //Change the card every 10 seconds
    setInterval(() => {
        const now = Date.now();
        if ((now - lastChangeTime) >= 10000) {
            changeCard();
        }
    }, 10000);
});

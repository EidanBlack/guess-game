let showedCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=> Math.random()-0.5);
console.log(numbers);

function showCard(id) {
    showedCards++;
    console.log(showedCards);
    if(showedCards == 1){
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = numbers[id];

        // Deshabilitar el primer botón
        card1.disabled = true;
    }
    
}
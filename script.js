// Declaración de variables
let showedCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = null;

// Apuntando al documento HTML
let showMovements = document.getElementById('movimientos');

// Generar números aleatorios en un array
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=> Math.random()-0.5);
console.log(numbers);

// Función al hacer click en un botón
function showCard(id) {
    showedCards++;
    console.log(showedCards);
    if(showedCards == 1){
        // Mostrar el primer botón
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = numbers[id];
        // Deshabilitar el primer botón
        card1.disabled = true;
    } else if(showedCards == 2) {
        card2 = document.getElementById(id);
        secondResult = numbers[id];
        card2.innerHTML = numbers[id];
        card2.disabled = true;
        showedCards = 0;
        // Incrementar la cantidad de movimientos
        movements++;
        showMovements.innerHTML = `Movimientos: ${movements}`;
    }
}
// Declaración de variables
let showedCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = null;
let score = 0;

// Apuntando al documento HTML
let showMovements = document.getElementById('movimientos');
let showScore = document.getElementById('aciertos');
let allButtons = document.querySelectorAll('button');

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
        if(firstResult === secondResult) {
            showedCards = 0;
            score++;
            showScore.innerHTML = `Aciertos: ${score}`;
            if (score == 8) {
                setTimeout(function(){
                    allButtons.forEach(button =>{
                        button.innerHTML = "";
                        button.disabled = false;
                    });
                    movements = 0;
                    score = 0;
                    showMovements.innerHTML = "Movimientos: 0";
                    showScore.innerHTML = "Aciertos: 0";
                }, 900);
            }
        } else {
            setTimeout(function(){
                card1.innerHTML = "";
                card2.innerHTML = "";
                card1.disabled = false;
                card2.disabled = false;
            }, 500);
        }
        
    }
}
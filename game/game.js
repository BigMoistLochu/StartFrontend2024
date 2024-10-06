import { Player } from './player.js';

const uniquePlayer = new Player('John Doe', 1, 20, 100);

/**
 * Funkcja rysująca element <div> dla gracza.
 * @param {Player} player - Obiekt gracza.
 */
const drawmethod = (player) => {
    let playerImage = document.getElementById("player");
    if (playerImage !== null) playerImage.remove();

    // 1. Tworzymy nowy element <div>
    const newDiv = document.createElement('div');
    // Opcjonalnie: Dodajemy id lub inne atrybuty do tego elementu
    newDiv.id = 'player';
    newDiv.style.width = player.tileSize + "px";
    newDiv.style.height = player.tileSize + "px";
    newDiv.style.border = "5px solid black";

    // 3. Złapanie istniejącego elementu, do którego chcemy dodać nowy <div>
    const parentElement = document.getElementById('game-board');

    // 4. Dodanie nowego <div> jako dziecko elementu rodzica
    parentElement.appendChild(newDiv);
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown') {
        uniquePlayer.moveDown();
        console.log(uniquePlayer.getYPosition());
        drawmethod(uniquePlayer);
    }
});
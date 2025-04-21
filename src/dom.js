import { createCharacterCard } from "./card.js";

const characterList = document.getElementById("character-list");

export function clearCharacters() {
  characterList.innerHTML = "";
}

export function renderCharacters(characters) {
  characters.forEach((char) => {
    const card = createCharacterCard(char);
    characterList.appendChild(card);
  });
}

export function renderNotFound() {
  characterList.innerHTML = `<p>No se encontraron personajes</p>`;
}

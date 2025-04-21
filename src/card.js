export function createCharacterCard(character) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${character.image}" alt="${character.name}" />
    <div class="card-body">
      <h3>${character.name}</h3>
      <p>Especie: ${character.species}</p>
      <p>Estado: ${character.status}</p>
    </div>
  `;
  return card;
}

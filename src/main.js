import "./style.css";
import { getCharactersByName } from "./api.js";
import { clearCharacters, renderCharacters, renderNotFound } from "./dom.js";

const input = document.querySelector("input");

async function fetchAndDisplay(name = "") {
  const data = await getCharactersByName(name);
  clearCharacters();

  if (data.results) {
    renderCharacters(data.results);
  } else {
    renderNotFound();
  }
}

fetchAndDisplay();

input.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  if (value.length > 0 || value === "") {
    fetchAndDisplay(value);
  }
});

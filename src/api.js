export async function getCharactersByName(name = "") {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
  return await response.json();
}

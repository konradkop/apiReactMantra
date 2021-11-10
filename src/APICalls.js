async function fetchStarWarsFacts() {
  let starWarsFacts = await fetch("https://swapi.dev/api/people");
  starWarsFacts = await starWarsFacts.json();
  return starWarsFacts.results;
}

export { fetchStarWarsFacts };

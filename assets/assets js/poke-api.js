
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}
// Crie uma variável para armazenar a expressão regular
var regex = /^[a-zA-Z0-9]+$/;
// Crie uma função que será executada quando o botão for clicado
function verMais() {
  // Obtenha o valor do campo texto
  var pokemontext = document.getElementById("pokemon-input").value;
  // Verifique se o valor corresponde à expressão regular
  if (regex.test(pokemontext)) {
    // Se sim, use a API do PokéAPI para obter as informações do pokémon
    var url = "https://pokeapi.co/api/v2/pokemon/" + pokemontext;
    // Faça uma requisição HTTP para a url e trate a resposta
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Mostre as informações do pokémon na página
        document.getElementById("pokemon-names").textContent = data.name;
        document.getElementById("pokemon-types").textContent = data.types[0].type.name;
        document.getElementById("pokemon-photo").src = data.sprites.front_default;
      })
      .catch(error => {
        // Trate os possíveis erros
        console.error(error);
        alert("Pokémon não encontrado!");
      });
  } else {
    // Se não, mostre uma mensagem de erro ao usuário
    alert("Por favor, digite um nome ou um número de pokémon válido!");
  }
}
// Adicione um evento de clique ao botão para chamar a função
document.getElementById("pokemon-info").onclick = verMais;
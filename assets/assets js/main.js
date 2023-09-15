const offset = 0
const limit = 12

const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

function convertPokemonLi(pokemon) {
    return `<li class="pokemon">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div>
        <ol class="types">
          <li class="type">${pokemon.types[0].name}</li>
        </ol>
  
        <img src="https://github.com/wellrccity/pokedex-html-js/blob/master/assets/img/pokemons/poke_${pokemon.number}.gif?raw=true" alt="${pokemon.name}">
      </div>
    </li>`;
  }
const pokemonList = document.getElementById('pokemonList')

fetch (url)
    .then( (response) => {      return response.json()})
    .then(  (jsonBody) =>   jsonBody.results) 
    .then((pokemonList) => {
        
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonLi(pokemon)
            
        }
    })
    .catch( (error) => {  console.log(error)})

    
      

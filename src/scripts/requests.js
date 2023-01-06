async function getAllPokemons() {

  const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon`, {
    method:'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => {
    
    render(res.results)
    //console.log(res)

    return res
  })
  return pokemons
}

async function getPokemonByName(pokemonName) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}
  `, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  .then(res => res.json())
  .then(res => res)
   render(pokemon.species)
}

 


 setTimeout(() => {
  getAllPokemons()},2000);
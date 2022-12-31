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
  .then(res => {
    render(res)
    return res
  })
  return pokemon
}

function renderSeach(){
   const searchInput = document.querySelector('input')
   const seachBtn = document.querySelector('#searchBtn')
  
    seachBtn.addEventListener('click', () => {

      getPokemonByName(searchInput.value)
    })
}


getAllPokemons()
//getPokemonByName()
renderSeach()
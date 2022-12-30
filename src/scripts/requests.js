async function getAllPokemons() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  .then(res => res.json())
  .then(res => {
   
    console.log(res)
  })

  
}

getAllPokemons()
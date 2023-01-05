function render(array) {
  const mainList = document.querySelector('.main__list')
  console.log(array)
  mainList.innerText = ''
  if(array.length > 0){
    array.forEach(element => {
    const img = element.url.slice(34, -1)
    const card = createCard(element, img)
      mainList.append(card)
    }) 
  }else{
    const img = array.url.slice(42, -1)
    const card = createCard(array, img)
    mainList.append(card)
  }
}

function createCard({name}, img) {
  const container = document.createElement('li')
  const image = document.createElement('img')
  const h2 = document.createElement('h2')
     image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${img}.png`
     image.alt = name
     h2.innerText = name
  container.append(image, h2 )
  return container
}

function renderSearch(){
let inputBtn = document.querySelector('.input').value
console.log(inputBtn)
  
getPokemonByName(inputBtn)
 
}

const button = document.querySelector('.button')
//console.log(button)

button.addEventListener('click', renderSearch)
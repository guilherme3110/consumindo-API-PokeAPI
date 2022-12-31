function render(array) {
    const mainList = document.querySelector('.main__list')

    mainList.innerHTML = ''
  
    array.forEach(element => {

      console.log(element)
      const img = element.url.slice(34, -1)
      console.log(img)
      const card = createCard(element, img)

  
      mainList.append(card)
    })
  }
  
  function createCard({name}, img) {
    const container = document.createElement('li')
    const image = document.createElement('img')
    const h2 = document.createElement('h2')
   
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${img}.png`
    image.alt = name
    h2.innerText = name
  
   
  
    container.append(image, h2, )
  
    return container
  }
  

  
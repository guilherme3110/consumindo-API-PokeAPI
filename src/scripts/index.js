function render(array) {
    const mainList = document.querySelector('.main__list')

    mainList.innerHTML = ''

    array.forEach(element => {
        const card = createCard(element)
        
        mainList.append(card)
    })
}

function createCard({name, img, ability}) {
    const container = document.createElement('li')
    const image = document.createElement('img')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')

    image.src = img
    image.alt = name

    h2.innerText = name

    p.innerText = ability

    container.append(image, h2, p)

    return container
}
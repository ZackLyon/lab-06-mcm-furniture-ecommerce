

function renderFurniture(furniture) {
    const liEl = document.createElement('li');
    const h3El = document.createElement('h3');
    const imgEl = document.createElement('img');
    const divEl = document.createElement('div');
    const descriptionEl = document.createElement('p');
    const categoryEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const buttonEl = document.createElement('button');

    h3El.textContent = furniture.name;
    imgEl.src = `../assets/${furniture.image}`;
    descriptionEl.textContent = furniture.description;
    categoryEl.textContent = `${furniture.category} item.`;
    priceEl.textContent = `$${furniture.price}`;
    buttonEl.textContent = 'Add';
    buttonEl.value = furniture.id;
    
    liEl.classList.add('furniture-item');
    h3El.classList.add('furniture-name');
    imgEl.classList.add('furniture-image');
    descriptionEl.classList.add('furniture-description');
    categoryEl.classList.add('furniture-category');
    priceEl.classList.add('furniture-price');
    buttonEl.classList.add('add-button');
    
    divEl.append(descriptionEl, categoryEl, priceEl, buttonEl);
    liEl.append(h3El, imgEl, divEl);
    
    buttonPress(buttonEl);

    return liEl;
}

function buttonPress(newButton) {
    newButton.addEventListener('click', () => {
        alert(`The ${newButton.value} was added.`);
    });
}

export default renderFurniture;
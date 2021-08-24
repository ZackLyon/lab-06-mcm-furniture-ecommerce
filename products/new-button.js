function newButton(furniture) {
    const buttonEl = document.createElement('button');
    
    buttonEl.textContent = 'Add';
    buttonEl.value = furniture.id;
    buttonEl.classList.add('add-button');

    buttonEl.addEventListener('click', () => {
        alert(`The ${buttonEl.value} was added.`);
    });

    return buttonEl;
}

export default newButton;

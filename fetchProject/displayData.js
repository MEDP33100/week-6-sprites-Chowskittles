class Pokemon {
    constructor(name, sprite, type) {
        this.name = name;
        this.sprite = sprite;
        this.type = type;
    }

    displayPokemon() {
        const container = document.querySelector('.pokemon-container');

        // creating card element
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        // for the image
        const img = document.createElement('img');
        img.src = this.sprite;
        img.alt = this.name;

        // name element
        const nameElement = document.createElement('p');
        nameElement.classList.add('pokemon-name');
        nameElement.textContent = this.name;

        // creating type element
        const typeElement = document.createElement('p');
        typeElement.classList.add('pokemon-type', this.type);
        typeElement.textContent = this.type;

        // appending everything
        card.appendChild(img);
        card.appendChild(nameElement);
        card.appendChild(typeElement);
        container.appendChild(card);
    }
}

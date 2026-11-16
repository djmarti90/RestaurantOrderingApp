class DishSection {
    constructor(name,
                ingredients,
                id,
                price,
                emoji) {
        this.name = name;
        this.ingredients = ingredients;
        this.id = id;
        this.price = price;
        this.emoji = emoji;
    }

    getTemplate() {
        let templateHtml = `<section id="${this.name}">`
            templateHtml += `
            <div class="dishInfoContainer">
                <div class="dishEmoji">${this.emoji}</div>
                <div>
                    <h3>${this.name}</h3>
                    <p>${this.ingredients}</p>
                    <span>${this.price}</span>
                </div>
            </div>`
            templateHtml += `<button class="addButton">+</button>`
        return `${templateHtml}
        </section>`
    }

}

export default DishSection
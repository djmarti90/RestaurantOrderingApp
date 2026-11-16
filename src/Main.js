import data from './data.js'
import DishSection from './DishSection.js'

let Main = {
    logData() {
        console.log(data)
    },
    getTemplate() {
        let templateHtml = `<main>`
        data.forEach((item) => {
            templateHtml += new DishSection(item.name,
                item.ingredients,
                item.id,
                item.price,
                item.emoji).getTemplate()
        })
        return `${templateHtml}
        </main>`
    },
}

export default Main
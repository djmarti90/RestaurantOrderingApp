import Header from './Header.js'
import Main from './Main.js'
let App = {
    renderApp: () => {
        document.querySelector('#app').innerHTML = `${Header.getTemplate()}`
        document.querySelector('#app').innerHTML += `${Main.getTemplate()}`
    }
}

export default App
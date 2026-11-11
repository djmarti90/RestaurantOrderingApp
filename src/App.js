import Header from './Header.js'
let App = {
    renderApp: () => {
        document.querySelector('#app').innerHTML = `${Header.getTemplate()}`
    }
}

export default App
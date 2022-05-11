const closeButton = document.getElementById('close-button')
const transitionWrapper = document.getElementById('transition-wrapper')

const openMenu = document.getElementById('open-menu')
const orderSummary = document.getElementById('order-summary')

function toggleDisplay(domElement) {
    if(domElement.style.display !== 'block') {
        domElement.style.display = 'block'
    } else {
        domElement.style.display = 'none'
    }
}

openMenu.addEventListener('click', ()=> toggleDisplay(transitionWrapper))

closeButton.addEventListener('click', () => {
    toggleDisplay(closeButton)
    toggleDisplay(transitionWrapper)
})


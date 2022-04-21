const closeButton = document.getElementById('close-button')

function toggleDisplay(domElement) {
    if(closeButton.style.display === 'none') {
        closeButton.style.display === 'block'
    }

    closeButton.style.display === 'none'

}

closeButton.addEventListener('click', toggleDisplay)
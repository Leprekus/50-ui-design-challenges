const burgerMenu = document.getElementById('burger-menu')
const sideBar = document.getElementById('sidebar')

function toggleRotation(domElement){
    if(domElement.style.transform !== 'rotate(90deg)'){
        domElement.style.transform = 'rotate(90deg)'
    } else if(domElement.style.transform === 'rotate(90deg)'){
        domElement.style.transform = 'rotate(0deg)'
    }
}

function toggleSideBar(){
    if(sideBar.style.left !== '0px'){
        sideBar.style.left = '0'
    } else if(sideBar.style.left === '0px'){
        sideBar.style.left = '-200px'

    }
}

function changeBG() {
    sideBar.style.backgroundColor = 'blue'
}

burgerMenu.addEventListener('click', () => {
    toggleSideBar()
    toggleRotation(burgerMenu)
})

sideBar.addEventListener('click', toggleSideBar)

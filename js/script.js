
const menuIcon1 = document.getElementById('menuIcon1')
const menuBody1 = document.getElementById('menuBody1')
const bodyElement = document.body

document.addEventListener('click', function(event){
    const target = event.target.closest('.container__menu')
    const clickBurger = event.target.closest('.menu__icon')
    console.log(clickBurger);
    

    if(!target){
        menuIcon1.classList.remove('_active')
        bodyElement.classList.remove('_lock')
        menuBody1.classList.remove('_active')
        return
    } else if(clickBurger != null){
        menuIcon1.classList.toggle('_active')
        bodyElement.classList.toggle('_lock')
        menuBody1.classList.toggle('_active')
        return
    } else{
        menuIcon1.classList.add('_active')
        bodyElement.classList.add('_lock')
        menuBody1.classList.add('_active')
    }

    
})


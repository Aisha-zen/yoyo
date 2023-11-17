const pressButton = document.querySelector('#toggle')

const item = document.querySelector('#payment')



pressButton.addEventListener('click' , function () {
    item.classList.toggle("hidden")
   
})


const items = document.querySelector('.kind')

items.addEventListener('click' , function () {
    item.classList.click("block")
   
})
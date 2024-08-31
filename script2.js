const button = document.querySelector('.btn')
const popup = document.querySelector('.popup-container')
const pop = document.querySelector('.popup')
const closeIcon = document.querySelector('.close-icon')

button.addEventListener('click',()=>{
  popup.classList.add('popup-open')
})

closeIcon.addEventListener('click',()=>{
  popup.classList.remove('popup-open')
})

popup.addEventListener('click',()=>{
  popup.classList.remove('popup-open')
})
pop.addEventListener('click',(e)=>e.stopPropagation())
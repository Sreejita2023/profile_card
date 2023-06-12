const pop=document.querySelector('.pop')
const overlay=document.querySelector('.overlay')
function openModel(){
    pop.classList.add('active')
    overlay.classList.add('active')
}
function closeModel(){
    pop.classList.remove('active')
    overlay.classList.remove('active')
}
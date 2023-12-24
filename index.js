console.log(`Checking validation of pages: +16
The layout matches the design +42
CSS Requirements +10
Interactivity +32
`);
const humburger = document.querySelector('.humburger')
const ul = document.querySelector('ul')

humburger.addEventListener('click',()=>{
    ul.classList.toggle('ham_active')
})
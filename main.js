const input = document.querySelector('#note__input');
const button = document.querySelector('#note__btn');
const note__ul = document.querySelector('#note__ul');


button.addEventListener ('click',function(e) {
    e.preventDefault()
    if (input.value === '') return
    createElement (input.value)
    input.value = ''
})

function createElement (value) {

    const button = document.createElement('button')
    const li = document.createElement('li')
    button.style.cssText = `
    border-radius: 30px;
    `
    li.textContent = value
    button.textContent = "Delete"

    li.className = 'li'
    button.className = 'btn'

    note__ul.appendChild (li)
    li.appendChild(button)

    button.addEventListener('click',function() {
        note__ul.removeChild(li)
    })

    li.addEventListener('click',function () {
        li.classList.toggle('li-active')
    })


}
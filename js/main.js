// user name prompt
const username = document.querySelector('#username')
const promptName = prompt('Masukkan nama anda:')
username.innerText = promptName

// form submit event
const messageForm = document.querySelector('#messageForm')
const formResult = document.querySelector('#formResult')
messageForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    // get form input values
    const form = document.forms['messageForm']
    const nameInput = form['name'].value
    const dateofbirthInput = form['dateofbirth'].value
    const genderInput = form['gender'].value
    const messageInput = form['message'].value 
    // check if username include any number
    if(nameInput.match(/\d+/)) {
        form['name'].value = ''
        form['name'].placeholder = 'tidak boleh ada angka!'
        form['name'].style.boxShadow = '0 0 5px crimson'
        return setTimeout(() => {
            form['name'].placeholder = 'your name'
            form['name'].style.boxShadow = ''
        }, 2000);
    }
    // display input result
    const textResult = `Submit time: ${new Date()}\n\nName: ${nameInput}\nDate of Birth: ${dateofbirthInput}\nGender: ${genderInput}\nMessage: ${messageInput}`
    formResult.innerText = textResult
})

// hamburger event
const dropdownNav = document.querySelector('#hamburger')
dropdownNav.addEventListener('click', () => {
    const navMenu = document.querySelector('#navMenu')
    navMenu.classList.toggle('display-none-s')
    navMenu.classList.toggle('display-flex')
    navMenu.classList.toggle('display-block-s')
})
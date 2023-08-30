// user name prompt
const username = document.querySelector('#username')
const promptName = prompt('Masukkan nama anda:')
username.innerText = promptName

// form submit event
const messageForm = document.querySelector('#messageForm')
const formResult = document.querySelector('#formResult')

function filterInputs(type, input) {
    // validate inputs
    switch(type) {
        case 'name':
            // number is not allowed
            if(input.value.match(/\d+/)) {
                input.value = ''
                input.placeholder = 'tidak boleh ada angka!'
                input.style.boxShadow = '0 0 5px crimson'
                setTimeout(() => {
                    input.placeholder = 'ex: John Doe'
                    input.style.boxShadow = ''
                }, 2000);
                return false
            }
            break
        case 'email':
            // email must be end with .com/net/org
            if(!input.value.match(/.*(?=.com|.net|.org)/)) {
                input.value = ''
                input.placeholder = 'format email salah'
                input.style.boxShadow = '0 0 5px crimson'
                setTimeout(() => {
                    input.placeholder = 'ex: abcd@email.com'
                    input.style.boxShadow = ''
                }, 2000);
                return false
            }
            break
    }
}

messageForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    // get form input values
    const form = document.forms['messageForm']
    const nameInput = form['name'].value
    const emailInput = form['email'].value
    const phoneNumberInput = form['phonenumber'].value
    const messageInput = form['message'].value 
    // validate inputs
    if(filterInputs('name', form['name']) === false) return
    if(filterInputs('email', form['email']) === false) return
    // display input result
    const textResult = `Submit time: ${new Date()}\n\nName: ${nameInput}\nDate of Birth: ${emailInput}\nGender: ${phoneNumberInput}\nMessage: ${messageInput}`
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
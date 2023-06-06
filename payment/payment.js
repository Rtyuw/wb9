const btn = document.querySelector('#button')
const check = document.querySelector('#gridCheck')
const modal = document.querySelector('.modal')
const mass = document.querySelector('.mass')
const btnClose = document.getElementById('btn-close')
const user = document.getElementById('user')
btn.disabled = true

const data ={}

btn.onclick = () => {
    data.name = document.getElementById('name').value,
    data.phone = document.getElementById('phone').value,
    data.address = document.getElementById('inputAddress').value,
    data.city = document.getElementById('inputCity').value,
    data.state = document.getElementById('inputState').value,
    data.zip = document.getElementById('inputZip').value
    console.log(data);  
    modal.style.display = 'block'
    user.innerText = `Здравствуйте, ${data.name}! Мы приняли ваш заказ, пожалуйста, ожидайте звонка.`
}


btnClose.onclick = () => {
    modal.style.display = 'none'
    localStorage.clear()
    localStorage.setItem('card', JSON.stringify([]))

}

check.addEventListener('click', () => {
    if (check.checked) {
        btn.disabled = false
    } else {
        btn.disabled = true

    }
})
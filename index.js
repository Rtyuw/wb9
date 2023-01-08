const input = document.getElementById('basic-url')
const total = document.getElementById('score')
let inp = 0

input.addEventListener('keyup', () => {
    inp = +input.value
    total.value = inp*2.53
})

const capsBtn =  document.getElementById('btn')
const capsAva =  document.getElementById('ava')
const capsDescripsion =  document.getElementById('descripsion')
const capsPrice =  document.getElementById('price')
const select = document.getElementById('select')

const db_url = 'https://incredible-project-a22a3-default-rtdb.firebaseio.com'

capsBtn.onclick = () => {
    const data = {
        ava: capsAva.value,
        description: capsDescripsion.value,
        price: capsPrice.value
    }
    console.log(data);
    capsAva.value =  ''
    capsDescripsion.value =  ''
    capsPrice.value =  ''


    return fetch(`${db_url}/${select.value}.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Applicayion/json'
        },
        body: JSON.stringify(data)
    })
}


const cards = document.querySelector('.cards')
const db_url = 'https://incredible-project-a22a3-default-rtdb.firebaseio.com'


function getClothes() {
    fetch(`${db_url}/clothes.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then( response => response.json())
    .then( result => {
        const shoos = Object.keys(result).map(key => result[key])
        console.log(shoos);


        for (let i = 0; i < shoos.length; i++) {
            const card = document.createElement('div')
            card.classList.add('card') 
                         
            const divTop = document.createElement('div')
            const divBottom = document.createElement('div')


            const ava = document.createElement('div')
            ava.classList.add('ava')
            ava.style.border = '1px solid black'
            ava.style.backgroundImage =  `url('${shoos[i].ava}')`

            // const cardBody = document.createElement('div')
            // cardBody.classList.add('card-body')

            const pText = document.createElement('p')
            pText.classList.add('card-text')

            pText.innerText = shoos[i].description

            const btn_prim = document.createElement('button')
            btn_prim.innerHTML = 'Add to card'
            btn_prim.classList.add('btn-primary')
            btn_prim.classList.add('btn')

            btn_prim.onclick = () => {
                const ls = JSON.parse(localStorage.getItem('card'))
                ls.push(shoos[i])
                localStorage.clear()
                localStorage.setItem('card', JSON.stringify(ls))
            }

            const price = document.createElement('h5')
            price.classList.add('card-title')

            price.innerText = shoos[i].price + '$'

            divTop.append(ava, pText)
            divBottom.append(price, btn_prim)
            // cardBody.append(divTop, divBottom)
            card.append(divTop, divBottom)
            cards.append(card)
    }


    })

    .catch(error => {
        console.log(error);
    })

}

getClothes()
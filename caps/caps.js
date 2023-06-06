const cards = document.querySelector('.cards')
const db_url = 'https://incredible-project-a22a3-default-rtdb.firebaseio.com'

let capsArray

function getCards() {
    fetch(`${db_url}/caps.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'Applicayion/json'
        },
    })
    .then(res => res.json())
    .then(result => {
        const returnCaps = Object.keys(result).map(key => ({...result[key]}))
        // capsArray = returnObject
        // // const a =  Object.keys(result.data).map( key => ({...result.data[key], id: key}));
        // return returnObject;
        if (returnCaps.length > 0) {

            for (let i = 0; i < returnCaps.length; i++) {
                const card = document.createElement('div')
                card.classList.add('card') 
                             
                const divTop = document.createElement('div')
                const divBottom = document.createElement('div')


                const ava = document.createElement('div')
                ava.classList.add('ava')
                ava.style.border = '1px solid black'
                ava.style.backgroundImage =  `url('${returnCaps[i].ava}')`

                // const cardBody = document.createElement('div')
                // cardBody.classList.add('card-body')

                const pText = document.createElement('p')
                pText.classList.add('card-text')

                pText.innerText = returnCaps[i].description

                const btn_prim = document.createElement('button')
                btn_prim.innerHTML = 'Add to card'
                btn_prim.classList.add('btn-primary')
                btn_prim.classList.add('btn')
    
                btn_prim.onclick = () => {
                    const ls = JSON.parse(localStorage.getItem('card'))
                    ls.push(returnCaps[i])
                    console.log(returnCaps[i]);
                    localStorage.clear()
                    localStorage.setItem('card', JSON.stringify(ls))
                }
    

                const price = document.createElement('h5')
                price.classList.add('card-title')

                price.innerText = returnCaps[i].price + '$'

                divTop.append(ava, pText)
                divBottom.append(price, btn_prim)
                // cardBody.append(divTop, divBottom)
                card.append(divTop, divBottom)
                cards.append(card)
            }
        }
    })
}

getCards()
// console.log(capsArray);
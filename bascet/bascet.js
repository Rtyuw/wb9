const cards = document.querySelector('.cards')


function getClothes() {
        const bascet = JSON.parse(localStorage.getItem('card'))
        console.log(bascet);


        for (let i = 0; i < bascet.length; i++) {
            const card = document.createElement('div')
            card.classList.add('card') 
                         
            const divTop = document.createElement('div')
            const divBottom = document.createElement('div')


            const ava = document.createElement('div')
            ava.classList.add('ava')
            ava.style.border = '1px solid black'
            ava.style.backgroundImage =  `url('${bascet[i].ava}')`

            // const cardBody = document.createElement('div')
            // cardBody.classList.add('card-body')

            const pText = document.createElement('p')
            pText.classList.add('card-text')

            pText.innerText = bascet[i].description

            const btn_prim = document.createElement('button')
            btn_prim.innerHTML = 'delete'
            btn_prim.classList.add('btn-primary')
            btn_prim.classList.add('btn')

            btn_prim.onclick = () => {
                const ls = JSON.parse(localStorage.getItem('card'))
                ls.splice(i, 1)
                localStorage.clear()
                localStorage.setItem('card', JSON.stringify(ls))
                location.reload()
            }

            const price = document.createElement('h5')
            price.classList.add('card-title')

            price.innerText = bascet[i].price + '$'

            divTop.append(ava, pText)
            divBottom.append(price, btn_prim)
            // cardBody.append(divTop, divBottom)
            card.append(divTop, divBottom)
            cards.append(card)
    }


    
}

getClothes()
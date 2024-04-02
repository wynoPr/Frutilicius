let fruit = [
    {
        id: 1,
        name: 'apple',
        img: '2x/apple.png'
    },
    {
        id: 2,
        name: 'banana',
        img: '2x/banana.png'
    },
    {
        id: 3,
        name: 'berry',
        img: '2x/berry.png'
    },
    {
        id: 4,
        name: 'cheery',
        img: '2x/cherry.png'
    },
    {
        id: 5,
        name: 'orange',
        img: '2x/orange.png'
    },
    {
        id: 6,
        name: 'peach',
        img: '2x/peach.png'
    },
    {
        id: 7,
        name: 'pear',
        img: '2x/pear.png'
    },
    {
        id: 8,
        name: 'watermelon',
        img: '2x/watermelon.png'
    }
];
//apple banana  berry cherry orange peach pear watermelon

//coloco las tarjetas

let frutilicius = [];
frutilicius = frutilicius.concat(fruit, fruit);
const grid$$ = document.querySelector('[data-function="grid"]');
const score$$ = document.querySelector('[data-function="score"]');
let scoreValue = parseInt(score$$.textContent)
const attempts$$ = document.querySelector('[data-function="attempts"]');
let attemptsValue = parseInt(attempts$$.textContent)
const noTochin$$ = document.querySelector('.noTochin');

console.log(fruit);
console.log(frutilicius)


while (frutilicius.length > 0) {
    const randomFruitIndex = Math.floor(Math.random() * frutilicius.length);
    const selectedFruit = frutilicius[randomFruitIndex];
    const classFruit = 'juicy_' + selectedFruit.id;

    // Crear tarjeta
    const card$$ = document.createElement('img');
    card$$.setAttribute('class', classFruit);
    grid$$.appendChild(card$$);
    card$$.setAttribute('src','2x/background.png')
    //gira carta y inicia comprob
    card$$.addEventListener('click', function () {
        eclipse(card$$, classFruit, selectedFruit.id)
        
    })

    // Actualizar array
    frutilicius.splice(randomFruitIndex, 1);

    console.log(selectedFruit);
    console.log(frutilicius.length);
}
console.log('ready 4 the summer')


let card1 = 0
let card2 = 0

const eclipse = (localite, actual, Id) => {
    
    const comprobante = () => {
        if( card1 === card2 ) {
            console.log('dime algo ye')

            const turneda = document.querySelector('.heart')
            turneda.setAttribute('data-state','done')
            turneda.classList.remove('heart')

            const turnedb = document.querySelector('.heart')
            turnedb.setAttribute('data-state','done')
            turnedb.classList.remove('heart')

            card1 = 0
            card2 = 0

            scoreValue++
            score$$.textContent = scoreValue

            attemptsValue++
            attempts$$.textContent = attemptsValue
            
            setTimeout(function(){noTochin$$.setAttribute('style','display: none')},200)

            const arrayDonne = document.querySelectorAll('[data-state="done"]')
            let arrayDonneValue = parseInt(arrayDonne.length)
            //console.log('el array final mide' + arrayDonneValue)
            if(arrayDonneValue == 16){
                grid$$.setAttribute('style','display: none')

                const container$$ = document.querySelector('.container');
                const rstBtt$$ = document.createElement('button')
                rstBtt$$.setAttribute('class', 'rstBtt');
                container$$.appendChild(rstBtt$$);
                rstBtt$$.textContent = 'Restart Game'
                rstBtt$$.addEventListener('click',function(){location.reload()})
            }

        }else if(card1 !== card2 ) {
            console.log('dime algo no')
            console.log(card1 !== card2)

            //class para que gire


            //esto da fallos, que me cambia la class del primero
            
            const turneda = document.querySelector('.heart')
            turneda.classList.add('total')
            turneda.classList.remove('heart')
            setTimeout(function(){turneda.setAttribute('src','2x/background.png')},300)
            setTimeout(function(){turneda.classList.remove('total')},500)

            const turnedb = document.querySelector('.heart')
            turnedb.classList.add('total')
            turnedb.classList.remove('heart')
            setTimeout(function(){turnedb.setAttribute('src','2x/background.png')},300)
            setTimeout(function(){turnedb.classList.remove('total')},500)

            card1 = 0
            card2 = 0

            attemptsValue++
            attempts$$.textContent = attemptsValue
            
            setTimeout(function(){noTochin$$.setAttribute('style','display: none')},200)
            
        }
    }
    
    
    const eclipseCl = actual + ' heart'
    localite.setAttribute('class', eclipseCl)
    setTimeout(function(){localite.setAttribute('src','2x/clear.png')},300)
    
    if( card1 === 0 ){
        card1 = Id
        console.log(card1)
    }else if (card1 !== 0 && card2 === 0) {
        card2 = Id
        console.log(card2 + '_' + card1)
        noTochin$$.setAttribute('style','display: block')
        setTimeout(function(){comprobante(card1, card2)},1000)
        
    }

}
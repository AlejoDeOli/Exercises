// const printMessage = (message) => console.log(message)


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const createMultiplication = (number1, number2) => {
//     let result = number1*number2
//     return result
// }

// const newNumbers = numbers.map(createMultiplication)
// console.log(newNumbers)


const $beers = beers

console.log($beers)


// function top10Alcohol(beers) {
//     const beersABV = beers.sort((a, b) => b.abv - a.abv);
//     const top10Beers = beersABV.slice(0, 10);
//     return top10Beers;
// }

// const top10AlcoholBeers = top10Alcohol(beers);
// console.log(top10AlcoholBeers)

// function top10Ibu(beers) {
//     const beersIBU = beers.sort((a, b) => a.ibu - b.ibu);
//     const top10IbuBeers = beersIBU.slice(0, 10);
//     return top10IbuBeers;
// }

// const top10IBUBeers = top10Ibu(beers);
// console.log(top10IBUBeers)




// function nameBeer(nameBeer) {
//      const beerName = beers.find(beer => beer.name === nameBeer);
//      return beerName ;
// }

// console.log(nameBeer(`Trashy Blonde`))




// function valorIBU(beers, valor) {
//     for (let i = 0; i < beers.length; i++) {
//         if(beers[i].ibu === valor){
//             return beers[i]
//         }
//     }
//     console.log(`There is no beer with that name.`)
// }

// const resultado = valorIBU(beers, 60)

// console.log(resultado)




// function positionsBeer(beer, beerName){
//     for (let i = 0; i < beer.length; i++) {
//         if(beer[i].name === beerName){
//             return i
//         }
//     }
//     console.log(`${beerName} don´t exist.`)
// }


// const positionBeer = positionsBeer(beers, `Hello My Name Is Mette-Marit`)
// console.log(positionBeer)




// function filterBeers (beers, level){
//     const filters = beers.filter(beer => beer.abv <= level)

//     const resultado = filters.map(beer => ({
//         name: beer.name,
//         abv: beer.abv,
//         ibu: beer.ibu
//       }));

//       return resultado;
// }

// const filters = filterBeers(beers, 6)
// console.log(filters)




// function orderBeer(beers, property, upward){
//     const beerOrder = [...beers]

//     beerOrder.sort((beerA, beerB) => {
//         const valueA = beerA[property];
//         const valueB = beerB[property];

//         if(upward){
//             return valueA - valueB
//         }else{
//             valueB - valueA
//         }
//     })

//     return beerOrder.slice(0, 10)
// }

// const beerOrderUpward = orderBeer(beers, `abv`, true)
// console.log(beerOrderUpward)

// const beerOrderFalling = orderBeer(beers, `ibu`, false)
// console.log(beerOrderFalling)




function boardBeer(beer){
    const boardIdentificate = document.getElementById(`board`);

    const boardd = document.createElement(`table`);

    const head = boardd.createTHead();
    const headRow = head.insertRow();
    const headColumns = [`Name`, `ABV`, `IBU`];

    headColumns.forEach(column => {
        const cell = headRow.insertCell();
        cell.textContent = column;
    })

    const body = boardd.createTBody();

    beer.forEach(beeer => {
        const row = body.insertRow();

        row.insertCell().textContent = beeer.name;
        row.insertCell().textContent = beeer.abv;
        row.insertCell().textContent = beeer.ibu;
    })

    boardIdentificate.appendChild(boardd) ;

}

const tableContainer = `My Board Beer`
boardBeer(beers, tableContainer)


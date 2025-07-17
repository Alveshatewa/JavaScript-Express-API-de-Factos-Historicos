import historicFacts from '../data/data.js'


function validateYear(year) {

    if(!(year >= 1920 && year <= 2020)){

        return false;

    } else{

        return true;
    }
}

function returnFacttOfYear ( year) {

    let selectedFact = historicFacts.find(fact => {

        return fact.Year == year
    })

    return selectedFact;

}


export  {validateYear, returnFacttOfYear};
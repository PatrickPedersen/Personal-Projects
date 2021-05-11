/*
*   3.  Skriv en funktion, som finde det højeste og det laveste tal i et array.
*       F.eks. vil svaret på [1, 2, 3, 4, 5] være [1, 5].
*
*       Vis hvordan funktionen kan gøres til en metode i en class.
*
*       Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

// Function
function arrayHighLow(array) {
    let result = []
    let high = null
    let low = null
    for (let num in array) {
        if (low == null) low = parseInt(array[num]);
        if (low > parseInt(array[num])) low = parseInt(array[num]);
        if (high < parseInt(array[num])) high = parseInt(array[num])
    }
    result.push(low)
    result.push(high)
    return result;
}

// Class Method
class myClass {
    constructor(array) {
        this.array = array
    }

    get getHighLow() {
        return this.arrayHighLow()
    }

    arrayHighLow() {
        let result = []
        let high = null
        let low = null
        for (let num in this.array) {
            if (low == null) low = parseInt(this.array[num]);
            if (low > parseInt(this.array[num])) low = parseInt(this.array[num]);
            if (high < parseInt(this.array[num])) high = parseInt(this.array[num])
        }
        result.push(low)
        result.push(high)
        return result;
    }
}

/*
* const calc = myClass([2,4,6,3,2,1])
* console.log(calc.getHighLow) -- [1,6]
*/
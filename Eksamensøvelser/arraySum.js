/*
*   2.  Skriv en funktion, som kan udregne summen af tallene i et array.
*       F.eks. vil summen af [1, 2, 3] være 6.
*
*       Vis hvordan funktionen kan gøres til en metode i en class.
*
*       Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

// Function
function arraySum(array) {
    let sum = null;
    for (num in array) {
        sum += array[num]
    }
    return sum;
}

// Class Method
class myClass {
    constructor(array) {
        this.array = array;
    }

    get getSum() {
        return this.arraySum();
    }

    arraySum() {
        let sum = null;
        for (let num in this.array) {
            sum += parseInt(this.array[num])
        }
        return sum;
    }
}

/*
* const calc = myClass([1,2,3])
* console.log(calc.getSum) -- 6
*/
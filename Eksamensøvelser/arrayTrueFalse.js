/*
*   1.  Skriv en funktion, som kan svare på om en værdi findes i et array.
*       F.eks. vil svaret på om 4 findes i [1, 2, 3] være false.
*
*       Vis hvordan funktionen kan gøres til en metode i en class.
*
*       Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

// Function
function arrayTrueFalse(num, array) {
    for (let index in array) {
        if ((parseInt(index) + 1) == num) {
            return true
        }
    }
    return false
}

// Class Method
class myClass {
    constructor(num, array){
        this.num = num;
        this.array = array;
    }

    get trueFalse() {
        return this.arrayTrueFalse();
    }

    arrayTrueFalse() {
        for (let index in this.array) {
            if ((parseInt(index) + 1) == this.num) {
                return true
            }
        }
        return false
    }
}

/*
* const calc = myClass(4, [1,2,3,4,5])
* console.log(calc.trueFalse) -- true
*
* const calc2 = myClass(7, [1,2,3,4,5])
* console.log(calc2.trueFalse) -- false
*/
/*
*   3.  Skriv en funktion, som finde det højeste og det laveste tal i et array.
*       F.eks. vil svaret på [1, 2, 3, 4, 5] være [1, 5].
*
*       Vis hvordan funktionen kan gøres til en metode i en class.
*
*       Beskriv koden med et flowchart og offentliggør den på et git repository.
*/

function arrayHighLow(array) {
    let result = []
    let high = null
    let low = null
    for (let num in array) {
        if (low == null) low = parseInt(array[num]);
        if (low > parseInt(array[num])) low = parseInt(arary[num]);
        if (high < parseInt(array[num])) high = parseInt(array[num])
    }
    result.push(low)
    result.push(high)
    return result;
}
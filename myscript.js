'use strict';
//scrivi una funzione che calcoli per ogni numero il quadrato e somma tutti i numeri
const nums = [1,2,3,4,5,6,7,8];
const result = nums.filter(n => n % 2 === 0).map(n => n * n).reduce((acc, curr) => acc + curr, 0);
console.log(result);

//somma dei numeri pari
const result1 = nums.filter(n => n % 2 === 0).reduce((acc, count) => acc + count, 0);
console.log(result1)

//conta quanti numeri posistiv
const result2 = nums.map(n=> n > 0).length;
console.log(result2);

//Moltiplica tutti i numeri
const result3 = nums.reduce((acc, curr)=>  acc * curr);
console.log(result3)

//Calcola la media dei cubi dei numeri di un array 
function mediaCubi(array) {
    let somma = 0;
    for(let numero of array) {
        somma += numero **3;
    }
    return somma/array.length;
}

console.log(mediaCubi(nums));
/**
 * To call from node
 * 
 *      node challenge-2.js 11
 */

const isPrime = (number) =>{

    let isPrime = true;

    for(let i = number - 1; i > 1; i--){
        if(number % i === 0){
            isPrime = false;

            break;
        }
    }

    return isPrime;

}

console.log(isPrime(process.argv[2]));

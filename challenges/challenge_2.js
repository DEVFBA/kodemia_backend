/**
 * To call function from node
 * 
 *      node challenge_2.js triangleArea 6 5
 * 
 */

const triangleArea = (base, height) => {

    return (base * height) / 2

};

console.log(triangleArea(process.argv[3], process.argv[4]));

/**
 * This one called with argv is on ../examples/challenge-2.js
 * 
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


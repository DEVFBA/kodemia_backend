const triangleArea = (base, height) => {

    return (base * height) / 2

};


console.log(`La base de un triángulos con base 3 y altura 4 es ${triangleArea(3, 4)}`);

const isPrime =(number) =>{

    let isPrime = true;

    for(let i = number - 1; i > 1; i--){
        if(number % i === 0){
            isPrime = false;
            
            break;
        }
    }

    return isPrime;

}

console.log(isPrime(6));
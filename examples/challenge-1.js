const sumEvenNumbers = (number) => {

    let sum = 0;

    for(let i=0; i<= number; i += 2){
        sum += i;
    } 

    return sum;

}

console.log(sumEvenNumbers(process.argv[2]));
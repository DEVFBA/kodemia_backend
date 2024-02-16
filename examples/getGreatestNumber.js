const getGreatestNumber = (arv) => {

    const numbers = [...arv]

    return Math.max(numbers);

}

let arv = process.argv.slice(2);

console.log(getGreatestNumber(arv));
const getEvenNumbers = () => {
    
    let evenNumbers = process.argv.filter((element) => {

        return element % 2 === 0;

    });

    return evenNumbers;

}

console.log(getEvenNumbers());
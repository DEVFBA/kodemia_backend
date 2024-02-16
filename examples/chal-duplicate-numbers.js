const duplicateNumbers = () => {

    const argsLen =  process.argv.length;
    let duplicatedNumbers = [];

    for(i = 2; i < argsLen; i++){

        duplicatedNumbers.push(process.argv[i] * 2);

    }

    return duplicatedNumbers;

}

console.log(duplicateNumbers(process.argv));
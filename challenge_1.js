const sumOddNumbers = (number) => {

    let sum = 0;

    for(let i=0; i<= number; i++){
        if(i%2 === 0){
            sum += i;
        }
    } 

    return sum;

}

console.log(`Odd Numbers Sum: ${sumOddNumbers(10)}`);

const countVowels= (str) => {

    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const strArray = str.split('');

    let count = 0;

    for(let i = 0; i < strArray.length; i++){
        if(vowels.indexOf(strArray[i].toUpperCase()) >= 0){
            count++
        }
    }

    return count;

}

console.log(`Vowels Count: ${countVowels('Hola Mundo')}`);

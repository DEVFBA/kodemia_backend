/**
 * Promises
 */

const fs = require('fs');

const writeFile = (path, text) =>{

    return new Promise((resolve, reject) => {
        fs.writeFile(path, text, (err) => {
            if(err) reject(err)
            else resolve('Success!!!!');
        });
    })

}

const readFile = (path) => {

    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if(err) reject(err)
            else {
                console.log(data);
                resolve(data);
            };
        })
    })

}

const appendFile = (path, text) => {

    return new Promise((resolve, reject) => {
        fs.appendFile(path, text, (err) => {
        if(err) reject(err)
        else {
            console.log('Sucess!!');
            resolve('Sucess!!!!');
        };
        })
    })

}

const deleteFile = (path) => {

    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
        if(err) reject(err)
        else {
            console.log('Sucess');
            Resolver('Sucess!!!!');
        };
        })
    })

}

/**
 * Async Await
 */

const writeFileAsync = async() => {
    
    try {
        fs.writeFile('./newFolder/test.txt', 'Hola Koders!!!', (err) => {
            if(err) throw new Error(`Error ${err}`);
            console.log('Success!!!!');
        });

        return('Success!!!');

    } catch (error) {
        return error;
    }

}
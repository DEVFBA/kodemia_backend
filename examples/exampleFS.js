const fs = require('fs');

/**
 * Files
 */

// fs.writeFile('./newFolder/test.txt', 'Hola Koders!!!', (err) => {
//     if(err) throw new Error(`Error ${err}`);
//     console.log('Success!!!!');
// });

// fs.readFile('./files/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// fs.appendFile('./files/test.txt', ' los saludo desde NodeJS', (err) => {
//     if(err) throw err;
//     console.log('Sucess!!');
// })

// fs.unlink('./files/test.txt', (err) => {
//     if(err) throw err;
//     console.log('Sucess');
// })

/**
 * Directories
 */

// fs.mkdir('./newFolder', (err) => {
//     if(err) throw err;
//     console.log('Sucess');
// })

/**
 * withFileTypes: false ==== Only retrieves name in array
 * withFileTypes: true ==== Retrieves metadata in array of objects for each file
 */
// fs.readdir('./newFolder', {withFileTypes: true}, (err, files) => {
//     if(err) throw err;

//     files.forEach(file => console.log(file));
// })

// fs.rmdir('./newFolder', {recursive: true}, (err) => {
//     if(err) throw err;
//     console.log('Sucess');
// })
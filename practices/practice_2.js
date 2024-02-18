const fs = require('fs');

const modifyJSON = (file) => {

    let jsonObject = null;
    let newJson = null;

    fs.readFile(file, 'utf-8', (err, data) => {

    if(err) throw err

    jsonObject = JSON.parse(data);

    jsonObject.read = true;

    /**
     * @param numero 3, 4 es el tabulador
     */
    newJson = JSON.stringify(jsonObject, null, 4);

    /**
     * writeFile, si existe el archivo lo sobreescribe
     */
    fs.writeFile(file, newJson, (err) => {
            
        if(err) throw err;

        console.log(`Success: ${newJson}`);

    });

})

}

modifyJSON(process.argv[2]);
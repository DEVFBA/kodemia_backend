const fs = require('fs');

const folderExists = (folderName) => {

    const files = fs.readdirSync('./', {withFileTypes: false}, (err, files) => {
        if(err) throw err;

    });

    return(files.includes(folderName))

}

module.exports = {
    folderExists
}
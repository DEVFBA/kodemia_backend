const fs = require('fs');
const {
    init,
    createHTMLFile
} = require('./commands');

const {
    createCSSFile,
    createJSFile
} = require('./createFiles');

const command   = process.argv[2];
const name      = process.argv[3];

const main = (command, name) => {

    if(command === 'init'){
        init(name);
        return;
    }

    if(command === 'html'){
        createHTMLFile({ fileName: name });
        return;
    }

    if(command === 'css'){
        createCSSFile({ fileName: name });
        return;
    }

    if(command === 'js'){
        createJSFile({ fileName: name });
        return;
    }

    fs.readFile('/home/devfba/kodemia/backend/practices/practice-3/errors/incorrect-command.txt', 'utf-8', (err, data) => {

        if(err) throw new Error(`¡¡¡No se pudo recuperar el archivo de error de comando!!!: ${err}`);

        console.log(data);

    });

}

main(command, name);
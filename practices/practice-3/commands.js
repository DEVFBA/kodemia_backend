const fs = require('fs');
const {
    createPagesFolder,
    createJSFolder,
    createCSSFolder
} = require('./createFolders');

const init = (projectName) => {

    fs.mkdir(`./${projectName}`, (err) => {
        
        if(err) throw new Error(`Error al crear el directorio del proyecto: ${err}`);

        console.log(`¡¡¡El directorio del proyecto ${projectName} fue creado con éxito!!!`);

        createHTMLFile({ projectName: projectName, fileName: 'index', createIndex: true });
        createPagesFolder(projectName);
        createJSFolder(projectName, true);
        createCSSFolder(projectName, true);

    });

};

const createHTMLFile = (options = { projectName: projectName, fileName: fileName, createIndex: createIndex }) => {

    if(options.createIndex){

        fs.writeFile(`./${options.projectName}/${options.fileName}.html`, `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>${options.projectName}</title>\n</head>\n<body>\n</body>\n</html>`, (err) => {
    
            if(err) throw new Error(`Error al crear el archivo ${options.fileName}.html: ${err}`);
    
            console.log(`¡¡¡El archivo ${options.fileName}.html fue creado con éxito!!!`);
    
        });

        return;

    }

    fs.writeFile(`./${options.fileName}.html`, `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>${options.fileName}</title>\n</head>\n<body>\n</body>\n</html>`, (err) => {

        if(err) throw new Error(`Error al crear el archivo ${options.fileName}.html: ${err}`);
    
        console.log(`¡¡¡El archivo ${options.fileName}.html fue creado con éxito!!!`);

    });

}

module.exports = {
    init,
    createHTMLFile
}
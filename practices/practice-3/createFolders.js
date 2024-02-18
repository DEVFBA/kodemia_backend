const fs = require('fs');
const {
    createJSFile,
    createCSSFile
} = require('./createFiles');

const createPagesFolder = (projectName) => {

    fs.mkdir(`./${projectName}/pages`, (err) => {

        if(err) throw new Error(`Error al crear el directorio pages: ${err}`);

        console.log(`¡¡¡El directorio pages para el proyecto ${projectName} fue creado con éxito!!!`)

    });

}

const createJSFolder = (projectName, createIndex) => {

    fs.mkdir(`./${projectName}/js`, (err) => {
            
        if(err) throw new Error(`Error al crear el directorio js: ${err}`);

        console.log(`¡¡¡El directorio js para el proyecto fue creado con éxito!!!`);

        if(createIndex) createJSFile({ projectName: projectName, fileName: 'index', createIndex: true });

    });

}

const createCSSFolder = (projectName, createIndex) => {

    fs.mkdir(`./${projectName}/css`, (err) => {
                    
        if(err) throw new Error(`Error al crear el directorio css: ${err}`);

        console.log(`¡¡¡El directorio css para el proyecto ${projectName} fue creado con éxito!!!`);

        if(createIndex) createCSSFile({ projectName: projectName, fileName: 'index', createIndex: true });

    });

}

module.exports = {
    createPagesFolder,
    createJSFolder,
    createCSSFolder
}
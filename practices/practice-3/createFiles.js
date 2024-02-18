const fs = require('fs');
const {
    folderExists
} = require('./utils');

const createJSFile = (options = { projectName: projectName, fileName: fileName, createIndex: createIndex }) => {

    if(options.createIndex){

        fs.writeFile(`./${options.projectName}/js/${options.fileName}.js`, '', (err) => {
                
            if(err) throw new Error(`Error al crear el archivo index.js: ${err}`);
    
            console.log(`¡¡¡El archivo ${options.fileName}.js fue creado con éxito!!!`);
    
        });

    }

    if(!folderExists('js')){

        fs.mkdir('./js', (err) => {

            if(err) throw new Error(`Error al crear el directorio js: ${err}`);

            fs.writeFile(`./js/${options.fileName}.js`, '', (err) => {
                if(err) throw new Error(`Error al crear el archivo ${options.fileName}.js: ${err}`);
        
                console.log(`¡¡¡El archivo ${options.fileName}.js fue creado con éxito!!!`);
            });

        })
        
    }
    
    fs.writeFile(`./js/${options.fileName}.js`, '', (err) => {
        if(err) throw new Error(`Error al crear el archivo ${options.fileName}.js: ${err}`);

        console.log(`¡¡¡El archivo ${options.fileName}.js fue creado con éxito!!!`);
    });


}

const createCSSFile = (options = { projectName: projectName, fileName: fileName, createIndex: createIndex }) => {

    if(options.createIndex){

        fs.writeFile(`./${options.projectName}/css/${options.fileName}.css`, '', (err) => {
                        
            if(err) throw new Error(`Error al crear el archivo ${fileName}.css: ${err}`);
    
            console.log(`¡¡¡El archivo ${options.fileName}.css fue creado con éxito!!!`);
    
        });

        return;

    }

    if(!folderExists('css')){

        fs.mkdir('./css', (err) => {

            if(err) throw new Error(`Error al crear el directorio css: ${err}`);

            fs.writeFile(`./css/${options.fileName}.css`, '', (err) => {
                if(err) throw new Error(`Error al crear el archivo ${options.fileName}.css: ${err}`);
        
                console.log(`¡¡¡El archivo ${options.fileName}.css fue creado con éxito!!!`);
            });

        })
        
    }
    
    fs.writeFile(`./css/${options.fileName}.css`, '', (err) => {
        if(err) throw new Error(`Error al crear el archivo ${options.fileName}.css: ${err}`);

        console.log(`¡¡¡El archivo ${options.fileName}.css fue creado con éxito!!!`);
    });

}

module.exports = {
    createJSFile,
    createCSSFile
}
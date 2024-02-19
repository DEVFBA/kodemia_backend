const { isGeneratorFunction } = require("util/types")

const object1 = {

    name: 'Angel',
    lastName: 'Gutierrez',
    age: 35

}

const object2 = {

    lastName: 'Gutierrez',
    name: 'Angel',
    age: 35

}

const object3 = {

    name: 'Angel',
    lastName: 'Huerta',
    age: 37

}

const object4 = {

    name: 'Angel',
    lastName: 'Gutierrez',
    age: 35,
    email: 'angenrique.gutierrez@gmail.com'

}

const sameObject = (object1, object2) => {

    let sameObject = true;
    /**
     * Same number of properties
     */
    if(Object.keys(object1).length !== Object.keys(object2).length){
        sameObject = false;
        return sameObject;
    }

    const object1Properties = Object.keys(object1);
    
    for(let i = 0; i < object1Properties.length; i++){

        if(Object.keys(object2).indexOf(object1Properties[i]) < 0){
            sameObject = false;
            return sameObject;
        }

    }

    return sameObject;

}

console.log(sameObject(object1, object3));
const object1 = {

    name: 'Angel',
    lastName: 'Gutierrez',
    age: 35

}

const object2 = {

    name: 'Angel',
    lastName: 'Gutierrez',
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

    console.log(Object.entries(object1).length);
    console.log(Object.entries(object2).length);

    if(Object.entries(object1).length !== Object.entries(object2).length){
        sameObject = false;
        return sameObject;
    }

    return sameObject;

}

console.log(sameObject(object1, object2));
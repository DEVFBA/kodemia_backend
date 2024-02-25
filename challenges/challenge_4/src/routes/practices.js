const fs =  require('fs');
const express = require('express');
const router = express.Router();


/**
 * Functions
 */

const getUsersAsync = async() => {

    return new Promise((resolve, reject) => {
        fs.readFile('./utils/db.json', 'utf-8', (err, data) => {
            if(err){
                console.log(err)
                reject(err)  
            } 
            
            resolve(JSON.parse(data));

        });
    });

}

const writeFileAsync = async (data) => {

    return new Promise((resolve, reject) => {
        fs.writeFile('./utils/db.json', data, (err) => {
            if(err){
                reject(err);
            }

            resolve(true);

        });
    })

}

const getUser = async (id) => {

    const users = await getUsersAsync();
    let user = null;

    if(!users) {
        console.log('Here!!!');
        reject(new Error('No hay users'));
    }

    user = users.find(user => user.id == id);

    console.log(user);

    return user;

}

/**********
 * CRUD
 **********/

/**
 * CREATE
 */

router.post('/users/', async (req, res) => {

    const user = req.body;

    try {

        const users = await getUsersAsync();

        users.push(user);

        await writeFileAsync(JSON.stringify(users, null, 4));

        res.status(200).send({message: `Succesful!!! :)`, data: user});

    } catch (error) {

        const err = new Error(error);

        res.status(400).send({message: `${err}`, data: null});

    }

});

/**
 * READ
 */

router.get('/users/', async (req, res) => {

    try {

        const users = await getUsersAsync();
        
        res.status(200).send({message: "OK", data: users});

    } catch (error) {

        const err = new Error(error);

        res.status(400).send({message: `${err}`, data: null});

    }

});

router.get('/users/:id', async (req, res) => {

    const { id } = req.params; 

    try {

        const user = await getUser(id);

        res.status(200).send({message: "OK", data: user});

    } catch (error) {

        const err = new Error(error);

        res.status(400).send({message: `${err}`, data: null});

    }

});

/**
 * UPDATE
 */

router.put('/users/:id', async (req, res) => {

    const { id } = req.params;
    const user = req.body;

    try {

        let users = await getUsersAsync();
        const indexToUpdate = users.findIndex(user => user.id == id);
        
        users.splice(indexToUpdate, 1);
        users.push(user);

        await writeFileAsync(JSON.stringify(users, null, 4));

        res.status(200).send({message: "OK", data: user});

    } catch (error) {

        const err = new Error(error);

        res.status(400).send({message: `${err}`, data: null});

    }

})

/**
 * DELETE
 */

router.delete('/users/:id', async (req, res) => {

    const { id } = req.params;

    try {

        let users = await getUsersAsync();
        const indexToDelete = users.findIndex(user => user.id == id);
        const userToDelete = users[indexToDelete];
        
        users.splice(indexToDelete, 1);

        await writeFileAsync(JSON.stringify(users, null, 4));

        res.status(200).send({message: "OK", data: userToDelete});

    } catch (error) {

        const err = new Error(error);

        res.status(400).send({message: `${err}`, data: null});

    }

})




module.exports = router;
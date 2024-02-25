const express = require('express');
const router = express.Router();

const findUser = async(find) => {

    const key = Object.keys(find)[0];
    const param = find[key];

    const users = [{
    
        id: 1,
        name: "Angel",
        mail: "angelgtzdev@gmail.com"
    
    },
    {
    
        id: 2,
        name: "Ricardo",
        mail: "ricardo@gmail.com"
    
    }]

    try {
        const user = users.find(u => u[key] == param); 
        console.log(user);  
        return user; 
    } catch (error) {
        
    }

}

router.get('/', async (req, res) => {
    try {
        res.status(200).send({message: "ok"});
    } catch (error) {
        res.status(400).send({message: "error"});
    }
})

router.get('/hi', async (req, res) => {
    try {
        res.status(200).send({message: "Hello Koders!!!"});
    } catch (error) {
        
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const user = await findUser({ id:id });

    try {
    
        res.status(200).send({message: "ok", data: user});

    } catch (error) {
        
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        res.status(201).send({message: "Post OK"})
    } catch (error) {
        
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = req.body;
        /**
         * TODO: Compare passwords
         */
    } catch (error) {
        
    }
})

module.exports = router;
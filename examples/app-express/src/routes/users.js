const express = require('express');
const router = express.Router();

const getUser = (users, id) => {

    console.log(id);
    console.log(users);
    const user = users.filter((user) => {
        return user.id === id;
    })

    console.log(user);

    return user;

}

router.get('/', (req, res) => {
    res.status(200).send({message: "ok"});
})

router.get('/hi', (req, res) => {
    res.status(200).send({message: "Hello Koders!!!"});
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

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
    res.status(200).send(getUser(users, id));
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send({message: "Post OK"})
});

module.exports = router;
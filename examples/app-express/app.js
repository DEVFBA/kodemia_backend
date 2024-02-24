const express =  require('express');

const getUser = (users, id) => {

    console.log(id);
    console.log(users);
    const user = users.find((user) => {
        return user.id === id;
    })

    console.log(user);

    return user;

}

const app = express();
const port = 3000;

app.use(express.json());

/**
 * Get
 */

app.get('/', (req, res) => {
    res.status(200).send({message: "ok"});
});

app.get('/hi', (req, res) => {
    res.status(200).send({message: "Hello Koders!!!"});
});

app.get('/user/:id', (req, res) => {
    const { id } = req.params;

    const users = [{

        id: 1,
        name: "Angel",
        mail: "angelgtzdev@gmail.com",
        password: "nascjni4nkjnqdui",
    
    },
    {
    
        id: 2,
        name: "Ricardo",
        mail: "ricardo@gmail.com",
        password: "fgvfsdvcsvqv34",
    
    }]
    res.status(200).send(getUser(users, id));
});

app.get('/math/isEven/:number', (req, res) => {

    const { number } = req.params;

    if(isNaN(parseFloat(number))) res.status(400).send({message: "Enter Number", even:null});

    if(number % 2 === 0)
        res.status(200).send({message: "OK", even: true})
    else res.status(200).send({message: "OK", even: false})

});

app.get('/math/allEven/:number', (req, res) => {

    const { number } = req.params;
    let evenNumbers = [];

    if(isNaN(parseFloat(number))) res.status(400).send({message: "Enter Number", even:null})
    else {
        for(let i=0; i<= number; i++){
            if(i%2 === 0) evenNumbers.push(i);
        }

        res.status(200).send({message: "OK", even: evenNumbers})
    }


})

/**
 * Post
 */

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send({message: "Post OK"})
});

/**
 * Put
 */

app.put('/', (req, res) => {
    res.status(200).send({message: "PUT Completed!!!"});
});

/**
 * Delete
 */

app.delete('/', (req, res) => {
    res.status(200).send({message: "DELETE Completed!!!"});
});


/**
 * Listener
 */

app.listen(port, () => {
    console.log(`API running on port ${port}, you're awesome!!!`)
});
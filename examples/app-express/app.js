const express =  require('express');
const userRoutes = require('./src/routes/users');

const app = express();
const port = 3000;

app.use(express.json());

/**
 * Get
 */

app.use('/users', userRoutes);

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
 * * ? follow regexp rules, char can be null or once
 * * + char must be at least once or more times
 * * * anything
 */
app.get('/ab?cd', (req, res) => {
    res.status(200).send({message: "ok"});
});

app.get('/ef+gh', (req, res) => {
    res.status(200).send({message: "ok"});
});

app.get('/ab*cd', (req, res) => {
    res.status(200).send({message: "ok"});
});

/**
 * Post
 */

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.status(201).send({message: "Post OK"})
// });

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
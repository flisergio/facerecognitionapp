const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const saltRounds = 10;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: "123", 
            name: "John",
            email: "john@gmail.com",
            password: "cookies",
            entries: 0,
            joined: new Date()
        },
        {
            id: "124", 
            name: "Sally",
            email: "sally@gmail.com",
            password: "bananas",
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: "987",
            hash: "",
            email: "john@gmail.com"
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);
});

app.post('/signin', (req, res) => {
    // bcrypt.compare("apples", "$2b$10$RaYj.wzG/NxqUhwj1QWqce19wpGTnxIboKs.77X7DMmAZlOwW8AeC", function(err, result) {
    //     console.log('first guess', result)
    // });

    // bcrypt.compare("veggies", "$2b$10$RaYj.wzG/NxqUhwj1QWqce19wpGTnxIboKs.77X7DMmAZlOwW8AeC", function(err, result) {
    //     console.log('second guess', result)
    // });

    if (req.body.email === database.users[0].email &&
        req.body.password == database.users[0].password) {
            res.json(database.users[0])
    } else {
        res.status(400).json("Error logging in!");
    }
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;

    database.users.push(
        {
            id: "125", 
            name: name,
            email: email,
            entries: 0,
            joined: new Date()
        }
    )

    res.json(database.users[database.users.length - 1])
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let userFound = false;

    database.users.forEach(user => {
        if (user.id === id) {
            userFound = true;
            return res.json(user);
        }
    })

    if (!userFound) {
        res.status(400).json("There is not such user!");
    }
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    let userFound = false;

    database.users.forEach(user => {
        if (user.id === id) {
            userFound = true;
            user.entries++;
            return res.json(user.entries);
        }
    })

    if (!userFound) {
        res.status(400).json("There is not such user!");
    }
})

// bcrypt.hash(password, saltRounds, function(err, hash) {
//     console.log(hash);
// });

// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//     // result == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
//     // result == false
// });

app.listen(8080, () => {
    console.log("App is running on port 8080");
});
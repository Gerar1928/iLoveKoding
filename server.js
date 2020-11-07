const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');
const app = express();
const port = 3000; 

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/userDB', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    }, 
    password: {
        type: Number, 
        required: true
    }
});

const User = mongoose.model('User', userSchema);

app.get('/home', (req, res) => {
    res.sendFile(`${__dirname}/public/html/index.html`);
});

app.get('/about-us', (req, res) => {
    res.sendFile(`${__dirname}/public/html/about.html`);  
});

app.get('/sign-up', (req, res) => {
    res.sendFile(`${__dirname}/public/html/signup.html`);   
});

app.post('/sign-up', (req, res) => {

    const fName = _.upperFirst(req.body.fName.trim());
    const lName = _.upperFirst(req.body.lName.trim());
    const email = req.body.email.trim();
    const password = req.body.password;

    const newUser = new User({
        firstName: fName,
        lastName: lName,
        email: email, 
        password: password
    });

    newUser.save((err, newUser) => {
        if(err) {
            console.log(err);
        } else {
            console.log(newUser);
        }
    });

});

app.listen(port, () => console.log(`Server is running on port ${port}`));
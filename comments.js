// Create web server
// Create a route for comments
// Create a POST route to add a comment
// Create a GET route to get all comments
// Create a DELETE route to delete a comment
// Create a PUT route to edit a comment
// Import the comments route in the server.js file

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let comments = [];

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.json(comment);
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.delete('/comments', (req, res) => {
    const index = req.body.index;
    comments.splice(index, 1);
    res.json(comments);
});

app.put('/comments', (req, res) => {
    const index = req.body.index;
    const comment = req.body.comment;
    comments[index] = comment;
    res.json(comments);
});

module.exports = app;
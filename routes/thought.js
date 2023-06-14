const express = require('express');

const router = express.Router();

const Thought = require('./../models/thought');

router.post('/', async (req, res) => {
    let thought = new Thought({
        title: req.body.title,
        thought: req.body.thought
    });
    try {
        thought = await thought.save();
        res.redirect("/");
    } catch (error) {
        res.send(error);
    }
});

router.get('/new', (req, res) => {
    res.render('new-thought')
});

module.exports = router;
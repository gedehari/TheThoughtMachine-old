const express = require('express');
const mongoose = require('mongoose');

const Thought = require('./models/thought');

const thoughtRoute = require('./routes/thought')

const PORT = process.env.PORT || 5000;

mongoose.connect(
    'REDACTED',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

/* ROUTES */

// Index route
app.get('/', async (req, res) => {
    const thoughts = await Thought.find().sort({ createdAt: 'desc' });
    res.render('index', { thoughts: thoughts });
});

// Thought route
app.use('/thought', thoughtRoute);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
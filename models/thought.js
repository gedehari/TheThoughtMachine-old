const mongoose = require('mongoose');

const thoughtSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thought: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Thought', thoughtSchema);
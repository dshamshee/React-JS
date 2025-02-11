const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);
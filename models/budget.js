const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category_id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    limit: { type: Number, required: true },
    spent: { type: Number, default: 0 }
});

module.exports = mongoose.model('Budget', budgetSchema);
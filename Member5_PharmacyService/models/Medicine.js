const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    medicineName: { type: String, required: true },
    stockQuantity: { type: Number, required: true },
    pricePerUnit: { type: Number, required: true },
    supplier: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Medicine', medicineSchema);

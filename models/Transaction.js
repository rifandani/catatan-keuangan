const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Mohon tambahkan teks'],
  },
  amount: {
    type: Number,
    required: [true, 'Mohon tambahkan angka'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Export the model
module.exports = mongoose.model('Transaction', TransactionSchema);

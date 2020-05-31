const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// path to config.env
dotenv.config({ path: './config/config.env' });
// panggil connectDB
connectDB();
// transactions routes
const transactions = require('./routes/transactions');
// inisialisasi express()
const app = express();

// app.use(logger());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// use router
app.use('/api/v1/transactions', transactions);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.NODE_ENV} on port ${PORT}`.blue.bold,
  );
});

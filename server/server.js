const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000;

// Import routes
const news = require('./routes/news');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, HEAD, GET, PUT, POST, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/', news);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

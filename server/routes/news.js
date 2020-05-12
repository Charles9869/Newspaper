const express = require('express');
const router = express.Router();
const fetch = require('isomorphic-fetch');
require('dotenv').config({ path: '../.env' });

// GET Return an array of top headlines articles
router.get('/top-headlines', (req, res) => {
  fetch(
    `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => res.send({ type: 'success', data: data }));
});

router.get('/search', (req, res) => {
  fetch(
    `http://newsapi.org/v2/everything?q=${req.query.article}&sortBy=${req.query.sort_by}&apiKey=${process.env.API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => res.send({ type: 'success', data: data }));
});

module.exports = router;

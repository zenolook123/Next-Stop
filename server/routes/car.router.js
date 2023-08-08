const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();

router.get('/mycars/:id', (req, res) => {
    const queryText = `SELECT * FROM "car" where "user_id" = $1`;
  pool
    .query(queryText, [req.user.id])
    .then(result => {
        res.send(result.rows)
        console.log('RESULT ROWS IS',result.rows)
    })
    .catch((err) => {
      console.log('Grab Meets Failed: ', err);
      res.sendStatus(500);
    });
});

router.post('/mycars', (req,res) => {
    console.log('In router post', req.body)
    const queryText = `INSERT INTO "car" (make, model, year, user_id)
    VALUES ($1, $2, $3, $4) RETURNING id`;
    pool
    .query(queryText,[req.body.make, req.body.model, req.body.year, req.user.id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
})

module.exports = router;
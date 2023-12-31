const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


const router = express.Router();

router.get('/', rejectUnauthenticated,(req, res) => {
    const queryText = `SELECT * FROM "user"`;
  pool
    .query(queryText)
    .then(result => {
        res.send(result.rows)
    })
    .catch((err) => {
      console.log('Grab Members Failed: ', err);
      res.sendStatus(500);
    });

});




module.exports = router;

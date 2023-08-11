const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();

router.get('/mycars/:id', (req, res) => {
    const queryText = `SELECT * FROM "car" where "user_id" = $1`;
  pool
    .query(queryText, [req.user.id])
    .then(result => {
        res.send(result.rows)
    })
    .catch((err) => {
      console.log('Grab Meets Failed: ', err);
      res.sendStatus(500);
    });
});

router.post('/mycars', (req,res) => {
    console.log('In router post', req.body)
    const queryText = `INSERT INTO "car" (make, model, year, user_id, mods)
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
    pool
    .query(queryText,[req.body.make, req.body.model, req.body.year, req.user.id, 'N/A'])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
})

router.put('/mycars/mods/:id', (req, res) => {
  const carId = req.params.id;
  const newMods = req.body.mods;
  const queryText = `UPDATE "car"
    SET mods = $1
    WHERE id = $2`;
  
  pool
    .query(queryText, [newMods, carId])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('Car mods update failed: ', err);
      res.sendStatus(500);
    });
});

router.delete('/mycars/:id', (req, res) => {
  const carId = req.params.id;
  const queryText = `DELETE from "car" WHERE id = $1`;
  pool
    .query(queryText, [carId])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('Car mods update failed: ', err);
      res.sendStatus(500);
    });
});


module.exports = router;
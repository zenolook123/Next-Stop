const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "meetups" where "creator_id" = $1`;
  pool
    .query(queryText, [req.user.id])
    .then(result => {
        res.send(result.rows)
    })
    .catch((err) => {
      console.log('Grab Members Failed: ', err);
      res.sendStatus(500);
    });

});

router.post('/', (req,res) => {
    console.log('In router post', req.body)
    const queryText = `INSERT INTO "meetups" (meetup_name, meetup_description, meetup_picture, meet_address, meet_date, meet_type, creator_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
    pool
    .query(queryText,[req.body.meetName, req.body.description, req.body.imageURL, req.body.address, req.body.date, 0, req.body.creatorID])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
})




module.exports = router;

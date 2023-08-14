const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


const router = express.Router();

router.get('/', rejectUnauthenticated,(req, res) => {
    const queryText = `SELECT * FROM "invites" where "user_id" = $1`;
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



router.post('/',rejectUnauthenticated, (req,res) => {
    const queryText = `INSERT INTO "invites" (meetup_id, user_id, attending)
    VALUES ($1, $2, $3)`;
    pool
    .query(queryText, [req.body.meetID, req.body.memberID, 0])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
})

router.delete('/', rejectUnauthenticated,(req, res) => {
  const queryText = `DELETE FROM "invites" WHERE id = $1`;
  pool
    .query(queryText, [req.body.meetupId])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log('Delete meetup failed: ', err);
      res.sendStatus(500);
    });
});

router.put('/', rejectUnauthenticated,(req, res) => {
  const meetID = req.body.meetID
  const userID = req.body.userID
  const attendingStatus = req.body.attending
  const queryText = `UPDATE "invites" SET
  attending = $1
  WHERE meetup_id = $2 AND user_id = $3`;

  pool
    .query(queryText, [attendingStatus, meetID, userID])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log('Update meetup failed: ', err);
      res.sendStatus(500);
    });
});






module.exports = router;

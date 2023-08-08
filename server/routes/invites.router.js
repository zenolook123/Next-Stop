const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();

router.get('/', (req, res) => {
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



router.post('/', (req,res) => {
    const queryText = `INSERT INTO "invites" (meetup_id, user_id)
    VALUES ($1, $2) RETURNING id`;
    pool
    .query(queryText, [req.body.meetupID, req.body.inviteID])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
})

router.delete('/', (req, res) => {
  const queryText = `DELETE FROM "invites" WHERE id = $1`;
  pool
    .query(queryText, [meetupId])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log('Delete meetup failed: ', err);
      res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
  const attendingStatus = req.body.status;
  const queryText = `UPDATE "invites" SET
    attending = $1,
 `;

  pool
    .query(queryText, [attendingStatus])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log('Update meetup failed: ', err);
      res.sendStatus(500);
    });
});






module.exports = router;

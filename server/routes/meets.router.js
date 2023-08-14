const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


const router = express.Router();

router.get('/mymeets',rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "meetups" where "creator_id" = $1`;
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
router.get('/',rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "meetups"`;
pool
  .query(queryText)
  .then(result => {
      res.send(result.rows)
  })
  .catch((err) => {
    console.log('Grab Meets Failed: ', err);
    res.sendStatus(500);
  });
});


router.get('/:id',rejectUnauthenticated, (req, res) => {
  const meetupId = req.params.id
  const queryText = `SELECT * FROM "meetups" WHERE "id" = $1`

  pool
    .query(queryText, [meetupId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Get Meetup Failed: ', err);
      res.sendStatus(500);
    });
});

router.post('/', rejectUnauthenticated,(req,res) => {
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

router.delete('/:id', rejectUnauthenticated,(req, res) => {
  const meetupId = req.params.id;
  const queryText = `DELETE FROM "meetups" WHERE id = $1`;
  pool
    .query(queryText, [meetupId])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log('Delete meetup failed: ', err);
      res.sendStatus(500);
    });
});

router.put('/:id', rejectUnauthenticated,(req, res) => {
  const meetupId = req.params.id;
  const queryText = `UPDATE "meetups" SET
    meetup_name = $1,
    meetup_description = $2,
    meet_address = $3
    WHERE id = $4`;

  const {
    meetup_name,
    meetup_description,
    meetup_address,
  } = req.body;

  pool
    .query(queryText, [meetup_name,meetup_address,meetup_description, meetupId])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log('Update meetup failed: ', err);
      res.sendStatus(500);
    });
});






module.exports = router;

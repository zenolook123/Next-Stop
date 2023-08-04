const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();

router.get('/mymeets', (req, res) => {
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
router.get('/', (req, res) => {
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


router.get('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
  const meetupId = req.params.id;
  const queryText = `DELETE FROM "meetups" WHERE id = $1`;
  console.log(meetupId)
  pool
    .query(queryText, [meetupId])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log('Delete meetup failed: ', err);
      res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
  const meetupId = req.params.id;
  const queryText = `UPDATE "meetups" SET
    meetup_name = $1,
    meetup_description = $2,
    meetup_picture = $3,
    meet_address = $4,
    meet_date = $5,
    meet_type = $6
    WHERE id = $7`;

  const {
    meetName,
    description,
    imageURL,
    address,
    date,
    meetType
  } = req.body;

  pool
    .query(queryText, [meetName, description, imageURL, address, date, meetType, meetupId])
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log('Update meetup failed: ', err);
      res.sendStatus(500);
    });
});






module.exports = router;

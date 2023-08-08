const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const uploadRouter = require('./routes/upload.router')
const membersRouter = require('./routes/members.router')
const meetsRouter = require('./routes/meets.router')
const carRouter = require('./routes/car.router')
const invitesRouter = require('./routes/invites.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/', uploadRouter )
app.use('/api/members', membersRouter)
app.use('/api/meets', meetsRouter)
app.use('/api/cars', carRouter)
app.use('api/invites', invitesRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

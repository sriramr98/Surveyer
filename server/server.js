const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

const keys = require('./config/keys');

const app = express();

// setup passport
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.GOOGLE_CLIENT_ID,
            clientSecret: keys.GOOGLE_CLIENT_SECRET,
            callbackURL: '/api/auth/google/callback'
        },
        accessToken => {
            console.log(accessToken);
        }
    )
);

app.get('/', (req, res) => {
    res.send('Welcome to surveyer');
});

const { PORT } = require('./config/keys');
app.listen(PORT, () => {
    console.log(`Process started on PORT ${PORT}`);
});

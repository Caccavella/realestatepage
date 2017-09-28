require('dotenv').config()
// import axios from 'axios';

const express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    session = require('express-session');
const app = express()
//MIDDLEWARE
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

//DB CONNECTION
massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
})

//AUTHENTICATION
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
    console.log(profile)
    const db = app.get('db');
    db.find_user(profile.id).then(user => {
        if (!user[0] && profile.id === process.env.auth0authorized1) {
            db.create_user([profile.displayName, profile.id]).then((user) => {
                return done(null, user)})
        } else if(user && profile.id === process.env.auth0authorized1) {
                    console.log('Found User',user)
                    return done(null, user[0]);
        } else {
            alert('How did you get here? You are not an admin, please contact the website owner.')
            return res.redirect(302, 'http://localhost:3000/#/');
        }
    })
}))
//INVOKED ONCE TO SET UP
passport.serializeUser(function (user, done) {
    // console.log('Serializing', user)
    done(null, user);
})
//USER COMES FROM SESSION - INVOKED ON EVERY ENDPOINT.
passport.deserializeUser(function (user, done) {
    console.log('deserial',user);
    // app.get('db').find_session_user(user[0].id).then(user => {
    //     return done(null, user[0]);
    // })
    done(null, user)
})
app.get('/login', passport.authenticate('auth0'));
app.get('/login/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/admin/',
    failureRedirect: 'http://localhost:3000/#/'
}))
// app.get('/auth/me', (req, res) => {
//     if (!req.user) {
//         return res.status(404).send('User not found')
//     } else {
//         return res.status(200).send(req.user);
//     }
// })
app.get('/auth/logout', (req, res) => {
    req.logOut().then(response => {
    return res.redirect(302, 'http://localhost:3000/#/');
})
})

app.post('/email', (req, res) => {
    app.get('db').create_emails([req.body.contactName, req.body.contactEmail, req.body.contactPhone, req.body.contactReason, req.body.contactMessage ])
    .then((response) => {
        return res.send(response);
    })
})

app.get('/email', (req,res) => {
    app.get('db').getEmails().then(response => {
        return res.send(response);
    })
})

app.get('/email/archive/:id', (req, res) => {
    console.log(req.params.id)
    app.get('db').archive_emails(req.params.id).then(response => {
        return res.send(response);
    })
})

let port = 3034;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})
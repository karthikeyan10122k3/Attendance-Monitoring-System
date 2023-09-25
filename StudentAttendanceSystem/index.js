const express = require('express');
const expressLayout = require('express-ejs-layouts');
const passport = require('passport');
const passportLocal = require('./config/passport_local_strategy');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const MongoStore = require('connect-mongo');
const port = 8000;
const app = express();

app.use(cookieParser());

app.use(express.urlencoded({extended: false}));

app.use(express.static('./assets'));

app.use(expressLayout);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'Staff',
    secret: 'abxyz',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/AttendanceSystemDev',
        autoRemove: 'disabled'
    })
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticated);

app.use('/', require('./routes/index'));

app.listen(port, (err) => {
    if(err){
        console.log(`Error in starting up the server`);
    }else{
        console.log(`Server is up and running at port: ${port}`);
    }
});
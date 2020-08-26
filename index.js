const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);
const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: 'true',
    outputStyle: 'extended',
    prefix: '/css'
}))

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);

// Extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo storeis used to store the session cookie in the db 
app.use(session({
    name: 'codeial',
    secret: 'blacksomething',
    saveUninitialized:false,
    resave:false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore (
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err ||  'connect-mongodbsetup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);



// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if(err){
        console.log('error in running the express server on the port 8000');
    }
    console.log('express server is running on port 8000');
});
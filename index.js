const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.use(express.static('./assets'));
app.listen(port, function(err){
    if(err){
        console.log('error in running the express server on the port 8000');
    }
    console.log('express server is running on port 8000');
});
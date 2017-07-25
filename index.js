const express = require ('express');

// set app expree app
const app = express();

app.use('/api', require('./routes/api'));

// listen for request
app.listen(process.env.port || 4000, function(){
    console.log('now listening for request');
});
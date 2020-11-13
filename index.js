express = require('express');
app = express();


app.use('/',express.static('public'));
app.listen(8888,function(){

    console.log("listening to 8888");
});
const app = require("./app.js");


var port = 4000 || process.env.PORT;

var server = app.listen(port , function(){
    console.log('server listening at port ' + port);
})
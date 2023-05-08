const app = require("./app.js");
const connection = require("./db.js")


var port = 80 || process.env.PORT;

var server = app.listen(port , function(){
    console.log('server listening at port ' + port);
})
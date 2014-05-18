var http = require("http");

function myexpress(){
	return function(req, res, next){
		if (req.url == "/foo"){
			res.statusCode = 404;
			res.end();
		} else {
			next();
		}
	}
}

module.exports = myexpress;

var http = require("http");
var argv = require("minimist")(process.argv.splice(2));
var port = argv.port || 4000;

function myexpress(){
	//使用app.handle来对app进行回调使用
	function app(req, res, next){
		app.handle(req, res, next);
	}
	//处理请求和应答
	app.handle = function(req, res, next){
		if (req.url == "/foo"){
			res.statusCode = 404;
			res.end();
		} else {
			next();
		}
	};
	//处理端口
	app.listen = function(port, done){
		var server = http.createServer(app);
		server.listen(port, done);
		return server;
	};

	return app;
}

module.exports = myexpress;

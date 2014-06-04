var express = require("../");
var request = require("supertest");
var http = require("http");

describe("Implement Empty App", function() {
	var app = express();
	describe("as handler to http.createServer", function() {
		// write test case here
		it("responds to /foo with 404", function(done){
			var server = http.createServer(app);
			request(server)
				.get("/foo")
				.expect(404)
				.end(done);
		});
		it("create the app.listen method", function(){
			var port = 8000;
			var server;

			before(function(done){
				server = app.listen(port, done);
			});

			it("should return an http server", function(done){
				expect(server).to.be.instanceof(http.server);
			});

			it("respond to /foo with 404", function(done){
				request("http://localhost:" + port).get("/foo").expect(404).end(done);	
			});
		});
	});
});

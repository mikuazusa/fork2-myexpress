var express = require("../");
var request = require("supertest");
var http = require("http");

describe("Implement Empty App",function() {
	var app = express();
	describe("as handler to http.createServer",function() {
		// write test case here
		it("responds to /foo with 404",function(done){
			var server = http.createServer(app);
			request(server)
				.get("/foo")
				.expect(404)
				.end(done);
		});
	});
});

//core node -- http(lauch server/send), fs, os, path, https(launch ssl server)
const http = require("http"); //global http
//abs apth
//const http = require("./http"); //looks for local

//this will run for each request made by the server
//function reqListener(req, res) {}

//function createServer(requestListener?: RequestListener): Server (+1 overload)
//http.createServer(reqListener);

//or anon func, and create server as an expression to use only once
const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers, req.cookies);
	res.setHeader("Content-Type", "text / html");
	res.write("<html>");
	res.write("</head><title>Title:MyWrittenServerPage</title><head>");
	res.write("<body>Hello from NodeJS, resolve</body>");
	res.write("</html>");
	res.end; //should not change response after end, end is when it's sent back to the client
	//process.exit(); //will keep running until we add a request that's executed
	//when we navigatite to http://localhost:5000 the server will get the request
});
//it will keep the server running.
//takes in port, defualt 80, host
server.listen(5000); //
//node is managed by an event loop, keeps running as long as there are event listeners registered

//only uses one thread, needs to handeçl mutiple events, ongoging loop
//instead of rerunning

//process.exit r

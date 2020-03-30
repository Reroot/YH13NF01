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
	//req obj that contains data
	console.log(req.url, req.method, req.headers, req.cookies);
	const url = req.url;
	const method = req.method;
	if (url == "/" && method == "POST") {
		const body = [];
		req.on("data", (chunk) => {
			console.log();
			body.push(chunk);
		});
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = (parsedBody = parsedBody.split("="))[1];
			return res.end();
		});

		// res.setHeader("Content-Type", "text / html");
		// res.write("<html>");
		// res.write("</head><title>Title:MyWrittenServerPage</title><head>");
		// res.write(
		// 	'<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>'
		// );
		// res.write("</html>");
		// return res.end; //after resend the res write after ward don't run
	}
	//should not change response after end, end is when it's sent back to the client
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

//On http://localhost:5000/ slash "/"

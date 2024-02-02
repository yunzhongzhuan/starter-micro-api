var http = require('http');
http.createServer(function (req, res) {
     //console.log(`Just got a request at ${req.url}!`);
     const response = await fetch("http://example.com/movies.json");
     console.log(response);
     res.write("123");
     res.end();
}).listen(process.env.PORT || 3000);

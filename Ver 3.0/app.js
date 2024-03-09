//we're using port 9090
const http = require('http');
const port = process.env.PORT | 9090;

const server = http.createServer(function(req,resp){

    resp.writeHead(200, {"Content-Type": "Text/html"});
    resp.write("<html><body>Hello</body></html>");
    resp.end;
});
server.listen(port);
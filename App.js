var http = require('http');
const server = http.createServer((req,res) =>{
    // console.log(req.url,req.headers,req.method);
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome</title></head>');
    res.write('<body><h1>Welcome To Node Js</h1></body>');
    res.write('</html>');
    res.end();

});
server.listen(8000);
// var os = require('os');
// console.log("Platform: " + os.uptime());
// console.log("Architecture: " + os.userInfo());

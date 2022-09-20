const http = require('http');

http.createServer((req, res) =>  {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });

    for (let i = 1; i <= 20; i++) {
        res.write(`${i}<br />`);

        console.log(i);
    }

    res.end();

}).listen(3000);
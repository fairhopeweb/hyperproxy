const http = require('http');

const port = process.env.PORT || process.env.NODE_PORT || 8000;

const onRequest = (req, res,) => {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    res.writeHead(200, headers);

    res.write("HUB SERVICE ONLINE");

    res.end();
};

http.createServer(onRequest).listen(port);

console.log(`Listening on localhost:${port}`);
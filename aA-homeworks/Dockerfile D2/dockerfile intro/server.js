var http = require("http");

http
    .createServer(function (req, res) {
        res.write("I'm tired");
        res.end();
    })
    .listen(8000);

// docker build. - t asaroyan/node
// docker build . -t asaroyan/node-server
// docker container run -it asaroyan/node-server/bin/sh
// docker container run --name node -d -p 80:8000 asaroyan/node:latest [node server.js], [means optional]
// docker image ls
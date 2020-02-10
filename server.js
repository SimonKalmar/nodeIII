"use strict";

const http = require("http");           // http module
const hostname = "localhost";
const port = Number(process.argv[2]) || 3000;

module.exports = {
    start(router) {
        const server = http.createServer();

        server.on("request", function (req, res) {              // eventhandler for "request"
            console.log(`Log: ${req.method} :  ${req.url}`);    // dev logging
            router.route(req, res);
        });

        server.listen(port, hostname, function () {
            console.log(`Log: Server started on http://${hostname}:${port}/`);
        });
    }
}

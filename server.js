const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = dev ? 3000 : process.env.PORT;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get("/stack", (req, res) => {
            return app.render(req, res, "/soon", req.query);
        });

        server.get("*", (req, res) => {
            return handle(req, res, "/", req.query);
        });

        server.listen(port, "0.0.0.0", err => {
            if (err) throw err;
            console.log("> Ready on http://0.0.0.0:" + port);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });

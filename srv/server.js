const cds = require("@sap/cds");
const bodyParser = require("body-parser");

cds.on("bootstrap", async (app) => {
    app.use(bodyParser.json());
});

// Delegate bootstrapping to built-in server.js
module.exports = cds.server;

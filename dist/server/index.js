"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const upstreetkyc_routes_1 = require("../routes/upstreetkyc-routes");
const app = express();
app.use(helmet());
app.use(cors({
    origin: "*",
    credentials: true,
}));
process.on("uncaughtException", (err) => {
    console.log(err);
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/upstreet/api", upstreetkyc_routes_1.default);
app.get("/", (req, res) => res.send("<html>" +
    "<body>" +
    "<h1>Welcome to KYC API</h1>" +
    "</body>" +
    "</html>"));
app.use((req, res, next) => {
    res.status(404);
    res.json({ error: "NOT FOUND - Check CORRECT address or DATABASE DOWN" });
});
exports.default = app;
//# sourceMappingURL=index.js.map
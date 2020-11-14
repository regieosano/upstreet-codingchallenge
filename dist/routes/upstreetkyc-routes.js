"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const clientInfoCheck_1 = require("../controllers/kyc/clientInfoCheck");
const apiRoutes = express.Router({ strict: true });
apiRoutes.get("/kyc", clientInfoCheck_1.clientInfoCheck);
exports.default = apiRoutes;
//# sourceMappingURL=upstreetkyc-routes.js.map
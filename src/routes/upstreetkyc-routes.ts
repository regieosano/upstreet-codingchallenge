import * as express from "express";

// Register controllers
import { clientInfoCheck } from "../controllers/kyc/clientInfoCheck";

const apiRoutes = express.Router({ strict: true });

// Post info routes definition
apiRoutes.post("/kyc", clientInfoCheck);

// Make the routes visible
export default apiRoutes;
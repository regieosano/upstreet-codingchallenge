import * as express from 'express';

import * as bodyParser from "body-parser";

import apiRoutes from "../routes/upstreetkyc-routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Middleware to handle logging operations
app.use("/upstreet/api", apiRoutes);

// Test Route
app.get("/", (req: express.Request, res: express.Response) => res.send(
    "<html>" +
        "<body>" +
            "<h1>Welcome to KYC API</h1>" +
        "</body>" +
    "</html>"
));

// Middleware to capture errors
app.use((req: express.Request,
    res: express.Response,
    next: express.NextFunction
   ) => {
              res.status(404);
              res.json({ error: "NOT FOUND - Check CORRECT address or DATABASE DOWN" });
        }

  );

export default app;
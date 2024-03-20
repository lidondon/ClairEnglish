import https from "https";
import fs from "fs";
import config from "./config/config";
import app from "./config/express";

app.listen(config.port, () => {
    console.log(`server started on  port https://127.0.0.1:${config.port} (${config.env})`);
});

export default app;


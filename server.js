const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();

app.use(
  cors({
    origin: config.corsOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api", propertyRoutes);





app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

// ---------- CORS ----------
app.use(cors());
// ---------- CORS END ----------

// ---------- BODY-PARSER ----------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ---------- BODY-PARSER END ----------

// ---------- SEQUELIZE ----------
const db = require("./models");
db.sequelize.sync();
// ---------- SEQUELIZE END ----------

app.get("/", (req, res) => {
  res.send("Welcome to City App.");
});

// ---------- ROUTES ----------
require("./routes/weatherRoutes")(app);
// ---------- ROUTES END ----------

app.listen(port, () => console.log(`Weather app listening on port ${port}!`));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require(`express`);
const app = express();
const cors = require(`cors`);
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`lisgyeujjns to ${port}`);
});

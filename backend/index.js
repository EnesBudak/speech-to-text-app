const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// cors

app.use(cors());
// import routes
const fileRoute = require("./routes/file");
const authRoute = require("./routes/auth");
const dashboardRoute = require("./routes/dashboard");
const transcribesRoute = require("./routes/transcribes");
dotenv.config();

// connect to DB
mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    try {
      console.log("db connected");
    } catch (error) {
      console.log(error);
    }
  }
);

app.use(express.json());

// route middlewares
app.use("/api/user", fileRoute);
app.use("/api/user", authRoute);
app.use("/api/dashboard", dashboardRoute);
app.use("/api/user/", transcribesRoute);
app.listen(process.env.PORT, () => {
  console.log("Server up and running");
});

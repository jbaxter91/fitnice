const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 8080;

//Middleware
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
//app.use(compression());
//app.use(require("./routes/html-routes"));
//app.use(require("./routes/api-routes"));

mongoose.connect(process.env.MONGODB_URI,
     {
         userNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
         useFindAndModify: false
    }, ()=> {
    console.log(`Connected to db`);
});


app.listen(PORT, ()=> console.log(`Server started on PORT: ${PORT}`));
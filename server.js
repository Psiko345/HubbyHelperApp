const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = serverPort;

app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(cors({ origin: clientOrigins }));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const uri = process.env.MONGODB_URI || "mongodb://localhost/hubbyhelperapp";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Atlas connection established.")
})

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).send(err.message);
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

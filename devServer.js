const http = require("http");
const path = require("path");
const util = require("util");
const fs = require("fs");

// const WebSocketServer = require("ws");
// const ansi = require("ansi");
// const BandwidthSampler = require("./src/util/BandwidthSampler");
// const makePathForFile = require("./src/util/fs").makePathForFile;

const app = require("express")();
const server = http.createServer(app);
const io = require("socket.io").listen(server);
const onConnect = require("./src/socket");

const config = require("./webpack.dev");
const webpack = require("webpack");
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: config.output.publicPath,
  stats: config.devServer.stats,
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/css/:slug", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "css", req.params.slug));
});

app.get("/js/:slug", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "js", req.params.slug));
});

app.get("*", function(req, res) {
  res.end("LOL");
});

var numClients = 3;
io.on("connection", onConnect.bind(null, numClients));

// setTimeout(dasEmit, 1000);
//
// function dasEmit(socket) {
//   io.emit("asdasd");
// }

server.listen(1337, "localhost", function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening at http://localhost:1337");
});

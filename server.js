const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const express = require("express");
const path = require("path");
const config = require("./webpack.config.dev");

const compiler = webpack(config);

const port = process.env.PORT || 3000;
const ip = "0.0.0.0";

let server;
if (process.env.NODE_ENV === "development") {
  server = new WebpackDevServer(compiler, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    inline: true,
    host: ip,
    port: port,
    stats: {
      colors: true
    }
  });
} else {
  server = express();
  server.use("/", express.static(path.join(__dirname, "./dist/")));
  server.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
  });
}

server.listen(port, ip, function(err) {
  if (err) {
    return console.log(
      err.toString({
        color: true
      })
    );
  }
  console.log("Listening at " + ip + ":" + port);
});

const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "",
  entry: "",
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  externals: {},
  module: {},
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      BOOTSTRAP_FONTS: path.resolve(
        "./node_modules/bootstrap-sass/assets/fonts/bootstrap"
      ),
      SLICK_CAROUSEL: path.resolve("./node_modules/slick-carousel/slick"),
      SYW_UIKIT_ASSETS: path.resolve("./src/assets")
    },
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.min.js"
  },
  performance: { hints: false }
};

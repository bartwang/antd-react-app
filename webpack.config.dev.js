const path = require("path");
const webpack = require("webpack");
const PORT = process.env.PORT || 3000;
const R = require("ramda");
const baseConfig = require("./webpack.config.base");

const rules = {
  appScript: {
    test: /\.(js|jsx)$/,
    loaders: "babel-loader",
    exclude: /node_modules/,
    options: {
      cacheDirectory: true,
      presets: [["env", { modules: false }], "react", "stage-3"],
      plugins: [
        "transform-runtime",
        "transform-class-properties",
        "react-hot-loader/babel"
      ]
    }
  },
  appStyle: {
    test: /\.(css|scss|sass)$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          localIdentName: "[path][name]__[local]"
        }
      },
      "sass-loader"
    ]
  },
  assets: {
    test: /\.(ttf|otf|eot|svg|woff(2)?|gif|png|jpe?g)(\?[a-z0-9]+)?$/,
    loader: "url-loader",
    options: {
      limit: 10,
      name: "[path][name].[ext]",
      context: path.resolve(__dirname, "./src")
    }
  },
  customTheme: {
    test: /\.less$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      {
        loader: "less-loader",
        options: {
          sourceMap: true
        }
      }
    ]
  }
};

const plugins = R.concat(baseConfig.plugins, [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]);

module.exports = R.mergeDeepRight(baseConfig, {
  devtool: "eval-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:" + PORT,
    "webpack/hot/only-dev-server",
    "babel-polyfill",
    "react-hot-loader/patch",
    "./src/examples/index.js"
  ],
  module: {
    rules: [rules.appScript, rules.appStyle, rules.assets, rules.customTheme]
  },
  plugins: plugins,
  output: {
    path: "/",
    publicPath: "/",
    filename: "syw-uikit.js"
  }
});

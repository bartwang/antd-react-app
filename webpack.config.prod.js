const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const R = require("ramda");

const baseConfig = require("./webpack.config.base");

const AUTO_PREFIXER_CONFIG = {
  browsers: [
    "> 5%",
    "last 2 versions",
    "not ie <= 8",
    "iOS >= 8",
    "Android >= 4",
    "ExplorerMobile >= 11"
  ]
};

const rules = {
  appScript: {
    test: /\.(js|jsx)$/,
    loaders: "babel-loader",
    exclude: /node_modules/,
    options: {
      presets: [["env", { modules: false }], "stage-3", "react"],
      plugins: ["transform-runtime", "transform-class-properties"]
    }
  },
  appStyle: {
    test: /\.(css|scss|sass)$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader",
          options: {
            minimize: true,
            localIdentName: "[hash:base64:10]"
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            ident: "postcss",
            plugins: loader => [autoprefixer(AUTO_PREFIXER_CONFIG)]
          }
        },
        "sass-loader"
      ]
    })
  },
  assets: {
    test: /\.(ttf|otf|eot|svg|woff(2)?|gif|png|jpe?g)(\?[a-z0-9]+)?$/,
    loader: "url-loader",
    options: {
      limit: 1,
      name: "[path][name].[ext]",
      context: path.resolve(__dirname, "./src")
    }
  },
  bootstrapFonts: {
    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: "url-loader",
    include: path.resolve(
      "./node_modules/bootstrap-sass/assets/fonts/bootstrap"
    ),
    options: {
      name: "assets/fonts/[path][name].[ext]",
      context: path.resolve("./node_modules/bootstrap-sass/assets/fonts")
    }
  },
  customTheme: {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader",
          options: {
            minimize: true,
            localIdentName: "[hash:base64:10]"
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            ident: "postcss",
            plugins: loader => [autoprefixer(AUTO_PREFIXER_CONFIG)]
          }
        },
        {
          loader: "less-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    })
  }
};

const plugins = R.concat(baseConfig.plugins, [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      comparisons: false
    },
    output: {
      comments: false,
      ascii_only: true
    },
    sourceMap: true
  }),
  new ExtractTextPlugin("syw-uikit.min.css"),
  new HTMLWebpackPlugin({ template: path.resolve(__dirname, "template.html") })
]);

module.exports = R.mergeDeepRight(baseConfig, {
  devtool: "source-map",
  entry: "./src/examples/index.js",
  module: {
    rules: [
      rules.appScript,
      rules.appStyle,
      rules.assets,
      rules.bootstrapFonts,
      rules.customTheme
    ]
  },
  plugins: plugins,
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "syw-uikit.min.js",
    library: "syw-uikit",
    libraryTarget: "umd"
  }
});

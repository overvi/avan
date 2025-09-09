const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/assets/js/home.js",
    form: "./src/assets/js/form.js",
    blog: "./src/assets/js/nav.js",
    blogDetails : "./src/assets/js/blogDetails.js"
  },

  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        "/index": "./src/index.html",
        "/step-1/index": "./src/step-1/index.html",
        "/step-2/index": "./src/step-2/index.html",
        "/step-3/index": "./src/step-3/index.html",
        "/confirm/index": "./src/confirm/index.html",
        "/blog/index": "./src/blog/index.html",
        "/blog/1/index": "./src/blog/1/index.html",
      },
      js: {
        filename: "js/[name].[contenthash:8].js",
      },
      css: {
        filename: "css/[name].[contenthash:8].css",
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(mp4|webm|ogg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/videos/[name][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },

      {
        test: /\.css$/i,
        use: ["css-loader", "postcss-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|avif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name].[hash:8][ext]",
        },
      },
    ],
  },
  devServer: {
    static: "./dist",
    hot: true,
    liveReload: true,
    watchFiles: ["src/**/*"],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".esm.js"],

    alias: {
      "@assets": path.join(__dirname, "./src/assets"),
    },
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },

  optimization: {
    runtimeChunk: "single",

    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  mode: "development",
};

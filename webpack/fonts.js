module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(ttf|woff|svg|svg)$/,
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      ],
    },
  };
};

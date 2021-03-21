module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg|gif)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            publicPath: '../images',
          },
        },
      ],
    },
  };
};

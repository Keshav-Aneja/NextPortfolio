module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ttf|otf|eot|woff|woff2)$/,
      loader: "file-loader",
      options: {
        name: "[name]-[hash].[ext]",
        outputPath: "fonts",
      },
    });
    return config;
  },
};

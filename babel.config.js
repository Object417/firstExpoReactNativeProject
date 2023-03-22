module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./src",
            "@Components": "./src/components",
            "@Store": "./src/store",
            "@Screens": "./src/screens"
          },
          extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx"]
        }
      ]
    ]
  }
}

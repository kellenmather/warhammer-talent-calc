module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          quietDeps: true,
          silenceDeprecations: [
            'import',
            'color-functions',
            'global-builtin',
            'if-function',
            'abs-percent',
            'legacy-js-api'
          ]
        }
      }
    }
  }
}

const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = () => ({
  plugins: [
    postcssImport({
      path: ['src'],
    }),
    postcssPresetEnv({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-selectors': true,
      },
    }),
  ],
});

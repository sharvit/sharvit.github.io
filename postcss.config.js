const postcssImport = require('postcss-import');
const postcssCustomSelectors = require('postcss-custom-selectors');
const postcssPresetEnv = require('postcss-preset-env');
const combineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');

module.exports = () => ({
  plugins: [
    postcssImport(),
    postcssCustomSelectors({
      importFrom: ['src/theme/styles/theme.selectors.css'],
    }),
    postcssPresetEnv({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-media-queries': {
          importFrom: ['node_modules/open-props/media.min.css'],
        },
      },
    }),
    combineDuplicatedSelectors(),
  ],
});

---
title: Using webpack to build a javascript library
coverImage: ../post-images/2019-12-28-using-webpack-to-build-a-javascript-library.png
---

Like building applications, webpack can be used to build libraries.
In this post, you will learn how to use webpack and babel to build your own library.

## Demo Library

Assuming having the following project, a small library called `even-numbers` with exported `isEven` and `isOdd` methods.

**Files**
```
.
├── src
│   └── index.js
└── package.json
```

**src/index.js**
```js
export const isEven = number => {
  if (isNaN(number)) {
    throw new TypeError('The first argument must be a number');
  }
  return number % 2 === 0;
};

export const isOdd = number => !isEven(number);
```

## Goals

- I want my library to be compatible with all the long-term support nodejs versions.

- I want my library to be compatible with all the browsers with a market share bigger than `1%`.
 
- Different developers have different javascript stack, and I would like my library to be consumed in various ways as well.

  **ES Module import**
  ```js
  import { isEven, isOdd } from 'even-numbers';
  ```

  **CommonJS Module require**
  ```js
  const { isEven, isOdd } = require('even-numbers');
  ```

  **AMD Module require**
  ```js
  require('even-numbers');
  
  require(['evenNumbers'], function (evenNumbers) {
   const { isEven, isOdd } = evenNumbers;
  });
  ```

  **Directly in the browser**
  ```html
  <html>
   <script src="https://unpkg.com/even-numbers"></script>
   <script>
     const { isEven, isOdd } = window.evenNumbers;
   </script>
  </html>
  ```


## Step-1 Installing babel

Install `@babel/core` and `@babel/preset-env` as development dependencies.
`@babel/preset-env` is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).
```bash
yarn add -D @babel/core @babel/preset-env
# or using npm
npm install --save-dev @babel/core @babel/preset-env
```

Create a `.babelrc` file in your project root, with the following content:
```
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": "> 1%, maintained node versions"
      }
    ]
  ]
}
```

**Those configurations would make sure our build will be compatible with:**
1. `> 1%` - All the browsers with a market share bigger than `1%`.
2. `maintained node versions` - All the currently maintained nodejs versions, see: https://nodejs.org/en/about/releases/

## Step-2 Installing webpack

Install `webpack` and `babel-loader` as development dependencies.
`babel-loader` is a webpack loader; it will allow webpack to use `babel` to build javascript files.

```bash
yarn add -D webpack babel-loader
```

Create a `webpack.config.js` file in your project root, with the following content:
```js
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    globalObject: 'this',
    libraryTarget: 'umd',
    library: 'evenNumbers',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

```

The first part of the config is the `entry` field, and this is the entry point of the library:
```js
  entry: path.resolve(__dirname, './src/index.js'),
```

The second field is the `output`, and this will configure what output webpack should produce.
```js
output: {
  path: path.resolve(__dirname, './dist'),
  filename: 'index.js',
  library: 'evenNumbers',
  globalObject: 'this',
  libraryTarget: 'umd',
},
```

* `path` together with `filename` - will be resolved to the build result destination, in this case, `./dist/index.js`.

* `library` - the library name. Will be used to consume the library.

* `globalObject: 'this'` - will make the library publicly available by using `global.evenNumbers` in node or `window.evenNumbers` in the browser.

* `libraryTarget: 'umd'` - will make the library available when using AMD or CommonJS 

The last part is the `module` filed where we add the `babel-loader` so webpack will build the javascript using `babel` together with the configurations in the `.babelrc` file.
This will add the compatibility for all platforms.

## Step-3 Make the library available by the library name when using AMD or CommonJS

Add `dist/index.js` to the `main` field in the `package.json`:
```json
{
  "main": "dist/index.js",
}
```

This will make the library available to import/require while using the library name.
```js
import { isEven, isOdd } from 'even-numbers';
```

## Last steps - Create the build script and use it

Add `build` and `develop` scripts to the `package.json`:
```json
{
  "scripts": {
    "build": "webpack --mode production",
    "develop": "webpack --mode development --watch"
  }
}
```

To build the library, run:
```bash
yarn build
# or using npm
npm run build
```

This will produce the following output:
```bash
$ webpack --mode production
Hash: 187393c09f5eb7fe7a4e
Version: webpack 4.41.4
Time: 241ms
Built at: 12/28/2019 5:07:55 PM
   Asset      Size  Chunks             Chunk Names
index.js  1.49 KiB       0  [emitted]  main
Entrypoint main = index.js
[0] ./src/index.js 1.05 KiB {0} [built]
Done in 0.66s.
```

**And will create the `./dist/index.js` file with the library, ready to be consumed.**

To build the library in watch mode, run:
```bash
yarn develop
# or using npm
npm run develop
```

## Optimization Bonus - Using common libraries

Many libraries use other common and popular libraries behind the scense. Such an example can be a library that exports react components.
In this case, you would want to avoid building `react` into your library bundle and instead trust the consumer to provide `react` and require it before the library.

We can tell webpack not build `react` into the library target by adding the `externals` field to the webpack config.
```js
module.exports = {
  ...
  externals : {
    react: 'react'
  },
  ...
};
```

If the library uses `jquery` and `lodash`, those can be added as well:
```js
module.exports = {
  ...
  externals : {
    react: 'react',
    jquery: 'jQuery',
    lodash : {
      commonjs: 'lodash',
      amd: 'lodash',
      root: '_' // indicates global variable
    },
    
  },
  ...
};
```

**Happy Hacking!!!**

## Useful

- [node-mdl-starter](https://github.com/sharvit/node-mdl-starter) - A starter project for open sourced JavaScript libraries.
- [generator-node-mdl](https://github.com/sharvit/generator-node-mdl) - Generate an open source JavaScript libraries.
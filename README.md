# classname-prefixer-js

A Webpack loader to automatically prefix CSS class names in JavaScript or TypeScript files with a custom string.

## Installation

Install the package using npm:

```bash
npm install classname-prefixer-js --save-dev
```

### Usage
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,             // Target JS/TS files
        exclude: /node_modules/,        // Exclude dependencies
        use: [
          {
            loader: 'classname-prefixer-js',
            options: {
              prefix: 'your-prefix',    // Replace 'your-prefix' with your desired class name prefix
            },
          },
        ],
      },
    ],
  },
};
```


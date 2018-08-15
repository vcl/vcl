# [VCL](https://github.com/vcl/doc) webpack loader

## Usage

### Installation

```sh
$ npm install vcl/loader --save-dev
```

### webpack config

```js
...
module: {
  rules: [
    {
      test: /\.styl$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            url: false
          }
        },
        {
          loader: 'vcl-loader'
        }
      ]
    }
  ]
}
```
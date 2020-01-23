# [VCL](https://vcl.github.io/) webpack tutorial

## Installing and building the VCL

0.  You will need a current version of node.JS and npm installed.
    All VCL modules are managed via npm.

1.  Clone the vcl repo from Github and navigate to the `doc/tutorial/webpack` directory.

    `$ git clone https://github.com/vcl/vcl.git && cd vcl/doc/tutorial/webpack`

2.  As you can see the folder contains several files and a folder:
  * `package.json` for this tutorial listing all required VCL and 3d party NPM modules.
  * `index.html` is an example website using vcl styling.
  * `vcl.scss` defines the styles by including vcl modules using `@use`.
  * `webpack.config.js` basic webpack config for the vcl

3.  Open a terminal and execute `npm install`.
    A folder `node_modules` is created which contains all VCL modules specified in the `package.json`.

4.  Run webpack to create a VCL build and start the webpack dev server:

    `npm start`

    The default browser should now open the index.html

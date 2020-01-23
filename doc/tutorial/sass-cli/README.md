# [VCL](https://vcl.github.io/) preprocessor cli tutorial

## Installing and building the VCL

0.  You will need a current version of node.JS and npm installed.
    All VCL modules are managed via npm.

1.  Clone the vcl repo from Github and navigate to the `doc/tutorial/sass-cli` directory.

    `$ git clone https://github.com/vcl/vcl.git && cd vcl/doc/tutorial/sass-cli`

2.  As you can see the folder contains several files and a folder:
  * `package.json` for this tutorial listing all required VCL and 3rd party NPM modules.
  * `index.html` is an example website using vcl styling.
  * `vcl.scss` defines the styles by including vcl modules using `@use`.

3.  Open a terminal and execute `npm install`.
    A folder `node_modules` is created which contains all VCL modules specified in the `package.json`.

4.  Run the VCL preprocessor to create a VCL build and start a http server:

    `npm start`

    The default browser should now open the index.html

## The scripts

The package.json file defines three scripts.

- `build` utilizes the preprocessor to build the vcl by transpiling the content of vcl.sss to valid css written in the file vcl.css. The `--watch` flag starts the preprocessor in watch mode, so any changes of vcl.sss will trigger a rebuild.

- `serve` starts a local webserver with the help of browser-sync. Changes to vcl.css or index.html are immediately reflected in the browser

- `start` runs `build` and `serve` parallel.

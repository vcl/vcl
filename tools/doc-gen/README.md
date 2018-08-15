# VCL Documentation Generator

A documentation generator for the VCL based on a set of modules or an entry
point `package.json` and its recursive dependencies.
In most cases you want the doc-gen to use a single `package.json`
listing all dependencies from your project.
The output will look like [the VCL's module browser](https://vcl.github.com/).

## Under the Hood

The main purpose of this module is to generate a JSON data structure
in which all information is held.
Modules considered need to have a `vcl` property in the `package.json` file
according to the structure
[explained here](https://github.com/vcl/vcl/doc/blob/master/DEVELOPMENT.md#packagejson).

Each module's documentation file (default is `README.md`) is picked and
copied into the JSON structure as well as the meta data from `package.json`.

The JSON data is rendered into a browsable documentation based on HTML by
the [vcl-doc-client](https://github.com/vcl/vcl/tools/doc-client)
module.

## Usage

### CLI

```Shell
npm -g i @vcl/doc-gen
cd someProject
vcl-doc-gen --entry ./package.json --output doc.html
```

#### Arguments

All arguments are optional.

Option      | Default                 | Description
 ---        | ---                     | ---
`--name`    | `VCL Documentation`     | Browser Title & Main heading
`--output`  | `vcl-documentation.html`| Output HTML file
`--entry`   | `./package.json`        | Entry file.
`--basePath`| current working dir     |

See [Options](https://github.com/vcl/vcl/tools/doc-gen#options) for a more detailed description.

#### Local CLI

```sh
npm install --save-dev @vcl/doc-gen
./node_modules/.bin/vcl-doc-gen
```

### Generate HTML

```sh
var docGenerator = require('@vcl/doc-gen');

docGenerator.generateHtml({
  name: 'VCL Documentation',
  entryPackage: './package.json',
  output: './documentation.html'
});
```

### Generate JSON

```js
var docGenerator = require('@vcl/doc-gen');

docGenerator.generate({
  name: 'VCL Documentation',
  entryPackage: './package.json',
  output: './doc.json'
});
```

## Options

### `name`

The name of the documentation. When using `vcl-doc-client` this will be
displayed in the header and set as the page title.

**Default:** `name: 'VCL Documentation'`

### `entryPackage`

The package that the doc-gen should parse to find all VCL dependencies and
generate the documentation from.

**Example:** `entryPackage: './package.json'`

### `packages`

You can put a list of paths to additional packages here or use this as an
alternative to the `entryPackage` option and set your packages manually.

**Example:** `packages: ['../vcl-test', './some/package']`

### `output`

The file to output the finished JSON doc.

**Default:** `output: './doc.json'`

### `removeTopHeading`

With this option, all level 1 headings from the package readme files are removed.
Defaults to `true`, because most packages have the package name as the first
heading and the `vcl-doc-client` does already display the package name
above the readme.

**Default:** `removeTopHeading: true`

### `basePath`

The base path.

**Example:** `basePath: './my-project'`

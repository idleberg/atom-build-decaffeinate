# build-decaffeinate

[![apm](https://img.shields.io/apm/l/build-decaffeinate.svg?style=flat-square)](https://atom.io/packages/build-decaffeinate)
[![apm](https://img.shields.io/apm/v/build-decaffeinate.svg?style=flat-square)](https://atom.io/packages/build-decaffeinate)
[![apm](https://img.shields.io/apm/dm/build-decaffeinate.svg?style=flat-square)](https://atom.io/packages/build-decaffeinate)
[![Travis](https://img.shields.io/travis/idleberg/atom-build-decaffeinate.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-build-decaffeinate)
[![David](https://img.shields.io/david/idleberg/atom-build-decaffeinate.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-decaffeinate#info=dependencies)
[![David](https://img.shields.io/david/dev/idleberg/atom-build-decaffeinate.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-decaffeinate?type=dev)

[Atom Build](https://atombuild.github.io/) provider for `decaffeinate`, converts CoffeeScript into JavaScript (ES6).

## Installation

### apm

Install `build-decaffeinate` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-decaffeinate`

### GitHub

Change to your Atom packages directory:

```bash
# Windows
$ cd %USERPROFILE%\.atom\packages

# Linux & macOS
$ cd ~/.atom/packages/
```

Clone repository as `build-decaffeinate`:

```bash
$ git clone https://github.com/idleberg/atom-build-decaffeinate build-decaffeinate
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

## Usage

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

* `decaffeinate` — converts script (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd>)

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Select active target**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Build script**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

**Jump to error**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd> or <kbd>F4</kbd>

**Toggle build panel**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-build-decaffeinate) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`

# build-decaffeinate

[![apm](https://flat.badgen.net/apm/license/build-decaffeinate)](https://atom.io/packages/build-decaffeinate)
[![apm](https://flat.badgen.net/apm/v/build-decaffeinate)](https://atom.io/packages/build-decaffeinate)
[![apm](https://flat.badgen.net/apm/dl/build-decaffeinate)](https://atom.io/packages/build-decaffeinate)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-build-decaffeinate)](https://circleci.com/gh/idleberg/atom-build-decaffeinate)
[![David](https://flat.badgen.net/david/dev/idleberg/atom-build-decaffeinate)](https://david-dm.org/idleberg/atom-build-decaffeinate?type=dev)

[Atom Build](https://atombuild.github.io/) provider for `decaffeinate`, converts CoffeeScript into JavaScript (ES6).

## Installation

### apm

Install `build-decaffeinate` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-decaffeinate`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
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

You should now be setup to build the package:

```bash
$ yarn build || npm run build
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

This work is licensed under the [The MIT License](LICENSE).

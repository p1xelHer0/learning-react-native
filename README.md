# learning-react-native

A sample React Native app developed with with Redux

## Table of Contents

- [Requirements](#requirements)
- [Recommendations](#recommendations)
- [Complete Installation](#installation)
  - [Install Xcode](#install-xcode)
  - [Install Homebrew](#install-homebrew)
  - [Install Watchman](#install-watchman)
  - [Install NVM](#install-nvm)
  - [Install Node](#install-node)
  - [Install React Native](#install-react-native)
  - [Install Yarn](#install-yarn)
- [Running the app](#running-the-app)
  - [Running on iOS](#running-on-ios)
  - [Running on Android](#running-on-android)
  - [Running tests](#running-tests)
  - [Linting](#linting)

## Requirements
* macOS (for iOS app)
* Xcode (for iOS app)
* Node
* Watchman

## Recommendations
* Homebrew
* NVM
* React Native Debugger https://github.com/jhen0409/react-native-debugger

## Installation

### Install Xcode
https://developer.apple.com/download/
Update Xcode command line tools:
```
$ xcode-select --install
```

### Install Homebrew http://brew.sh/
```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install Watchman https://facebook.github.io/watchman/
```bash
$ brew install watchman
```

### Install NVM https://github.com/creationix/nvm/
I recommend installing a fresh Node version with NVM, as it solved many `sudo`-related problems:
```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```

### Install Node https://nodejs.org/
```bash
$ nvm install node
```
Note: if you get a `nvm: command not found` check the [NVM Troubleshooting](#nvm)

Use NVM Node instead of previous System Node:
```bash
$ nvm use node
```
Verify that you are using the NVM Node:
```bash
$ which node
```
Should point to the NVM path:
```
/Users/<userName>/.nvm/versions/node/<nodeVersion>/bin/node
```

### Install React Native https://facebook.github.io/react-native/
```bash
$ npm install react-native-cli -global
```

### Install Yarn https://yarnpkg.com/
```bash
$ npm install yarn-pkg -global
```

## Running the app
Install all dependencies with Yarn:
```bash
$ yarn install
```

### Running on iOS
Start the React Native package manager:
```bash
$ yarn run start
```
Open a new terminal and start the app (iOS):
```bash
$ yarn run ios
```
macOS will start your emulator.

### Running on Android
To run the app on Android you need to start your emulator before calling the app command. This can be done with ` $ android -avd <emulatorName>` or with Android Studio. Up to you.

After you have started the emulator, start the app by running:
```bash
$ yarn run android
```

### Testing the app
Jest is used for testing 
> https://facebook.github.io/jest/

All tests can be found in the `__tests__`-folder

```
root
├── __tests__/
│   ├── Components/
│   │   ├── __snapshots__/
│   │   │   └── ...
│   │   └─ ...
│   ├── Reducers/
│   │   └── ...
│   └── store.spec.js
├── ...
├── index.android.js
├── index.ios.js
...
```

React components are also Snapshot tested
> http://facebook.github.io/jest/docs/tutorial-react-native.html#snapshot-test

Run the tests 
```
$ yarn run test
```

Run the tests in `watch`-mode
```
$ yarn run test:watch
```

### Linting
As of yet I have not had time to setup the linting in the CLI. At the moment I use the inline-linting with the Atom package https://github.com/AtomLinter/linter-eslint


## Troubleshooting

### Yarn
> `yarn run start` hangs and nothing happens.

> Try unloading the Watchman daemon by running the following:
> ```bash
$ launchctl unload ~/Library/LaunchAgents/com.github.facebook.watchman.plist
```

### NVM

> Installing node with nvm results in `nvm: command not found`

> Source NVM by adding the following to your `.profile` / `.bash_profile` / `.bashrc` or whatever shell you are running:
```bash
[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh
```
> More info about sourcing files: http://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/x237.html

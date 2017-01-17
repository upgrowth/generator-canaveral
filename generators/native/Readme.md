# Canaveral Native


## Standard Build

Canaverl native creates a standard build react native app to get you going.

It uses the following core libraries:

* react-native-router - A url based router for page flow management - https://github.com/jmurzy/react-router-native
* re-base - A Firebase integrated state management library - https://github.com/tylermcginnis/re-base
* @shoutem - shoutem ui toolkit is a standard set of components with theming support - http://shoutem.github.io/docs/ui-toolkit/introduction

This combination gives you a standard navigation pattern, standard ui components, theming and
cascading of stylesheets and an integrated database, auth and file storage mechanism. Booyah.

## Project Anatomy

`components/App.js` is your core application. Here you can initialise and app wide data or state.

`components/Routes.js` defines the application page routes. You can navigate to a page by route, using `nativeHistory.push, .pop, .replace, .transitionTo`, `<Link to="/path"/>`, `<Pop />` etc

`config/theme.js` imports the standard shoutem theme and allows you to override the standard components or create styles for your
own components. You can also use styles directly in your components with `<Component style={{ color: "#abc123" ... }}/>` - note
that this does not use StyleSheet.create

`services/firebase.js` this is the connection to firebase using re-base, including your configuration.


## Getting Started

You'll need a series of tools for this to work.
You should already have:

* node
* npm cli
* react-native cli 
* yarn cli
* yeoman cli
* firebase-tools cli

If not:

`brew install n` // Install n - node version manager
`n latest` // Install the latest version of node using n
`npm install -g yarn` // Install yarn globally, now we don't need npm anymore
`yarn global add yo firebase-tools react-native-cli`

Ok. All set up!

## To create a project

There are 4 basics steps:

1. Initialise new react native project with the react-native cli
2. Update the files with the Canaveral native generator
3. Link react-native libraries
4. Run the app

1. From a parent directory, run `react-native init`. This will create a new project directory.
2. Enter the new directory, and run this generator. `yo canaveral:native`
3. Link `react-native link`
4. Run `react-native run-ios` 

## To update your project

The react-native cli periodically updates. You can upgrade it with yarn, then update your
app with canaveral to keep it in sync. Be super careful, this could break stuff so make sure you commit
before running any of these instructions

1. `yarn global upgrade react-native-cli` // Upgrade the cli software
2. `react-native upgrade` // Upgrade your application
3. `yo canaveral:native` // Rerun the generator. Be careful not to blow away application changes you've already made
4. `react-native link`

## Running your app

`react-native run-ios`
`react-native run-android`

## Adding libraries & dependencies

`yarn add <dependency>`







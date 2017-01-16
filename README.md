# generator-canaveral
> Where we launch things that go places



## General Installation

You're going to need [node.js](https://nodejs.org/)
```bash
brew install node
```

We use yarn, not npm, because its good.
```bash
npm install -g yarn
```

Then you're going to want to install [Yeoman](http://yeoman.io) and the Firebase toolset
```bash
yarn global add yo firebase-tools
```

Then you can totally install this thing right from GitHub since it aint on NPM yet

```bash
yarn global add https://github.com/upgrowth/generator-canaveral
```

## React Web

Then make your new project
```bash
mkdir project-name
cd project-name
yo canaveral
```

### Build Commands

`yarn start` runs your project in dev mode
`yarn run build` builds your project in prod mode to the build folder
`yarn run test` runs your tests, hope you wrote some
`yarn run clean` removes the build folder so that's nice
`yarn run deploy` cleans, builds and then deploys your project to firebase 


## React Native

`yarn global add react-native` installs the React Native CLI
`react-native init <projectname>` Create a new react native project
`cd project-name` 
`yo canaveral:native` Sets up a canaveral react-native app


## License

Apache-2.0 © [Upgrowth](http://www.upgrowth.com.au)
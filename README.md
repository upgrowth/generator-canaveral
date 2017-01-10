# generator-canaveral [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Where we launch things that go places

## Installation

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

## License

Apache-2.0 © [Upgrowth](http://www.upgrowth.com.au)


<!--[npm-image]: https://badge.fury.io/js/generator-canaveral.svg
[npm-url]: https://npmjs.org/package/generator-canaveral
[travis-image]: https://travis-ci.org/upgrowth/generator-canaveral.svg?branch=master
[travis-url]: https://travis-ci.org/upgrowth/generator-canaveral
[daviddm-image]: https://david-dm.org/upgrowth/generator-canaveral.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/upgrowth/generator-canaveral-->

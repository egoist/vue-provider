# vue-provider

[![NPM version](https://img.shields.io/npm/v/vue-provider.svg?style=flat)](https://npmjs.com/package/vue-provider) [![NPM downloads](https://img.shields.io/npm/dm/vue-provider.svg?style=flat)](https://npmjs.com/package/vue-provider) [![CircleCI](https://circleci.com/gh/egoist/vue-provider/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-provider/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## How does it work?

[provide/inject](https://vuejs.org/v2/api/#provide-inject).

## Install

```bash
yarn add vue-provider
```

## Usage

```js
import Vue from 'vue'
import { Provider } from 'vue-provider'

const Root = {
  render() {
    return <Provider msg="hello">
      <Child />
    </Provider>
  }
}

const Child = {
  inject: ['msg'],
  render() {
    return <button>{this.msg}</button>
  }
}

new Vue({
  el: '#root',
  render: h => h(Root)
})
```

It renders:

```html
<button>hello</button>
```

### Create provider

By default the Provider component name is `Provider`, however you can use a custom one:

```js
import { createProvider } from 'vue-provider'

const ThemeProvider = createProvider('ThemeProvider', props)
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vue-provider** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vue-provider/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)

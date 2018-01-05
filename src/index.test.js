import { mount } from 'vue-test-utils'
import { Provider } from './'

test('main', () => {
  const App = {
    name: 'app',
    inject: ['store'],
    render() {
      return <h1>{this.store.msg}</h1>
    }
  }
  const wrapper = mount({
    render() {
      return <Provider store={{ msg: 'msg' }}>
        <App />
      </Provider>
    }
  })
  expect(wrapper.text()).toBe('msg')
})

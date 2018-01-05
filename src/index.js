export const createProvider = (name = 'Provider', props) => ({
  name,
  props,
  provide() {
    return props ? this.$props : this.$attrs
  },
  render() {
    return this.$slots.default[0]
  }
})

export const Provider = createProvider()

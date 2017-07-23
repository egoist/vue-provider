export const createProvider = (name = 'Provider') => ({
  functional: true,
  render(h, ctx) {
    const propNames = Object.keys(ctx.props)
    const Provider = {
      name,
      props: propNames,
      provide() {
        return this.$props
      },
      render() {
        return this.$slots.default[0]
      }
    }
    return h(Provider, { props: ctx.props }, ctx.children)
  }
})

export default createProvider()

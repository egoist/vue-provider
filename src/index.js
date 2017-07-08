export default {
  functional: true,
  render(h, ctx) {
    const propNames = Object.keys(ctx.props)
    const Provider = {
      name: 'provider',
      props: propNames,
      provide() {
        return this.$props
      },
      render(h) {
        return h(this.$slots.default[0])
      }
    }
    return h(Provider, { props: ctx.props }, ctx.children)
  }
}

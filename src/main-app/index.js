import garfish from 'garfish'


window.whiteList = {}

let foo = undefined
const deps = []
Object.defineProperty(window.whiteList, 'foo', {
  get() {
    deps.findIndex(window.currentTarget) === -1 && deps.push(window.currentTarget)
    return foo
  },
  set(value) {
    foo = value
    deps.forEach(dep => dep.notify())
  }
})


setTimeout(() => {
  window.whiteList.foo = 'foo'
}, 3000)


Garfish.run({
  basename: '/',
  domGetter: '#subapp',
  apps: [
    {
      name: 'vue',
      activeWhen: '/vue',
      entry: 'http://localhost:9001',
    },
  ],
  protectVariable: ['currentTarget']
});
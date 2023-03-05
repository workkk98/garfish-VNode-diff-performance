function createThousandsElement(filterCallback, mapCallback) {
  return new Array(1000).fill(0).filter(filterCallback).map(mapCallback)
}

import('./async-chunk').then((val) => {
  console.log(val)
})

export default {
  name: 'App',
  data() {
    return {
      mode: 0,
    }
  },
  beforeUpdate() {
    console.time('diff time')
  },
  updated() {
    console.timeEnd('diff time')
  },
  render(h) {
    const createBtn = () => {
      return h('button', { on: {
        click: () => {
          this.mode = (this.mode + 1) % 2
        }
      } }, 'click')
    }

    if (this.mode === 1) {
      return  h('div', {}, [].concat(createBtn(), createThousandsElement(
        () => true,
        (item, index) => {
          if (index % 2 === 0) {
            return h('div', {}, index)
          } else if (index % 3 === 0) {
            return h('span', {
              style: {
                color: 'red',
              },
            })
          } else {
            return h('h1', {}, index)
          }
        }
      )))
    }

    return h('div', {}, [].concat(createBtn(), createThousandsElement(
      (item, index) => index % 5 !== 0,
      (item, index) => {
        if (index % 2 === 0) {
          return h('span', {
            style: {
              color: 'red',
            }
          })
        } else if (index % 3 === 0) {
          return h('div', {}, index)
        } else {
          return h('h2', {}, index)
        }
      }
    )))
  }
}
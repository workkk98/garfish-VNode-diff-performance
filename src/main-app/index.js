import garfish from 'garfish'

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
});
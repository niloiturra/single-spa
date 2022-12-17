import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: '@Nilos/react-nilo-single',
  app: () => System.import('@Nilos/react-nilo-single'),
  activeWhen: (location) => location.pathname === '/react-nilo-single',
});

registerApplication({
  name: '@Nilos/react-nilo-multiples',
  app: () => System.import('@Nilos/react-nilo-multiples'),
  activeWhen: ['/react-nilo-multiples'],
});

registerApplication({
  name: '@Nilos/react-route',
  app: () => System.import('@Nilos/react-route'),
  activeWhen: (location) => location.pathname === '/react-route',
});

registerApplication({
  name: '@Nilos/react-nilo-header',
  app: () => System.import('@Nilos/react-nilo-header'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});

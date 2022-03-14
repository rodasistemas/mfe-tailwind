import "./styles.css"
import { registerApplication, start } from 'single-spa'

// HEADER
registerApplication(
  'header',
  // @ts-ignore
  () => import('home-nav/Header'),
  (location) => location.pathname.startsWith('/'),
)
// NAVIGATOR
registerApplication(
  'navigator',
  // @ts-ignore
  () => import('home-nav/Navigator'),
  (location) => location.pathname.startsWith('/'),
)
// DEFAULT
registerApplication({
  name: 'body',
  // @ts-ignore
  app: () => import('home-body/Body'),
  activeWhen: [ (location) => {
    return location.pathname === '/' || location.pathname === '/home'
  } ],
  customProps: {
    domElement: document.querySelector('main'),
  }


})
//ABOUT
registerApplication({
  name: 'about',
  // @ts-ignore
  app: () => import('home-about/About'),
  activeWhen: (location) => location.pathname.startsWith('/about'),
  customProps: {
    domElement: document.querySelector('main'),
  }

})
// FOOTER
registerApplication(
  'footer',
  // @ts-ignore
  () => import('home-nav/Footer'),
  (location) => location.pathname.startsWith('/'),
)

start({
  urlRerouteOnly: true
})
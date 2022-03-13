import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Body from './Body'

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    // rootComponent: Body,
    loadRootComponent:(props) => Promise.resolve().then(() =>  Body),
  })
  
  export const bootstrap = lifecycles.bootstrap
  export const mount = lifecycles.mount
  export const unmount = lifecycles.unmount
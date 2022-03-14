import React from 'react';
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Footer from './Footer'
import '../index.css'
const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Footer,
    errorBoundary: (err, props, other) => {
      console.log({err, props, other})
    }
  })
  
  export const bootstrap = lifecycles.bootstrap
  export const mount = lifecycles.mount
  export const unmount = lifecycles.unmount
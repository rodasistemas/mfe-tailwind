import React from 'react';
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Header from './Header'


export const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Header
  })
  
  export const bootstrap = lifecycles.bootstrap
  export const mount = lifecycles.mount
  export const unmount = lifecycles.unmount

  
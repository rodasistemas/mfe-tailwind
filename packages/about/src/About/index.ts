import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import About from './About'

const loaderElm = document.createElement('div');
loaderElm.classList.add('loader');

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: About,

  suppressComponentDidCatchWarning: true,
  errorBoundary: (err, props, other) => {
    console.log({ err, props, other })
  }
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
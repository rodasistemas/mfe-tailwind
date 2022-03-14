import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Body from './Body'
import '../index.css'

const loaderElm = document.createElement('div');
loaderElm.classList.add('loader');

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Body,
    // loadRootComponent:(props) => new Promise(
    //   (resolve, reject) =>
    //   {
    //     document.body.appendChild(loaderElm)
        
    //       resolve(Body)
        
    //   }
    // ).then(() => {
    //   document.body.removeChild(loaderElm);
    //   return Body
    // } 
    // ),
    errorBoundary: (err, props, other) => {
      console.log({err, props, other})
    }
  })
  
  export const bootstrap = lifecycles.bootstrap
  export const mount = lifecycles.mount
  export const unmount = lifecycles.unmount
import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import '../index.css'

const Header: React.VFC = () => {
  return (
    <header className="bg-gradient-to-b from-slate-900 to-slate-600 w-full  fixed top-0">
      <p className="p-8 text-cyan-400 font-bold ">Header from React</p>
    </header>
  )
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
  errorBoundary:(err, props, others) => {
    console.log({err, props, others});
  }
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
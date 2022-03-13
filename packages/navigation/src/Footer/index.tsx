import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

const Footer: React.VFC = () => {
  return (

    <footer className="bg-gradient-to-b to-slate-900 from-slate-600 w-full  fixed bottom-0">
      <p className="p-8 text-cyan-400 font-bold">Footer from React</p>
    </footer>
  )
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Footer,
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
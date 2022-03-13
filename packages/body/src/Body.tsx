import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import './index.css'
import { LoremIpsum } from "lorem-ipsum";

const Body: React.VFC = () => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  return (
    <div className="bg-slate-700 h-full pl-8 pr-8 text-white pt-24 pb-24">
      <h1 className="text-3xl text-sky-400 pb-10">
        Body from React
      </h1>
      <p className="font-size-12 line-height-medium">
        {lorem.generateParagraphs(10)}
      </p>
    </div>
  )
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Body,
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
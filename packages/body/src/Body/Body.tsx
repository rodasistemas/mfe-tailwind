import { LoremIpsum } from "lorem-ipsum";
import '../index.css'

const Body: React.VFC = () => {
  const lorem = new LoremIpsum();
  return (

    <div className="bg-slate-700 dark:bg-black h-full pl-12 pr-12 pt-28 pb-24 text-white ">
      <h1 className="text-3xl text-sky-400 mb-10 border-b-2 border-sky-400">
        Body from React
      </h1>
      <div className="space-12 break-word font-size-12 ">
        <p className="pb-5">
          {lorem.generateParagraphs(5)}
        </p>
        <p className="pb-5">
          {lorem.generateParagraphs(3)}
        </p>
        <p className="pb-5">
          {lorem.generateParagraphs(5)}
        </p>
        <p className="p-8 text-center border-2 m-2">
          {lorem.generateSentences(10)}
        </p>
        <p className="pt-5 italic normal">
          {lorem.generateWords(36)}
        </p>
      </div>
    </div>

  )
}

export default  Body;
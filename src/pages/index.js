import React from "react"
import Layout from "../components/layout"
import borderStyles from "./index.module.css"
import JSONData from "../../content/indexInformation.json"

export default function Home() {
  return (
    <Layout>
      <div style={{textAlign: `center`}}>
        <h1 className={borderStyles.borderAlternate}>
          {JSONData.indextitle}
        </h1>
        <p>
          {JSONData.indexTopdescription}
        </p>
        <p className={borderStyles.border}>
          {JSONData.indexBottomdescription}
        </p>
      </div>
    </Layout>
  )
}
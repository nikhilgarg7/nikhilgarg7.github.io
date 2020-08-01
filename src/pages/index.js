import React from "react"
import Layout from "../components/layout"
import borderStyles from "./index.module.css"

export default function Home() {
  return (
    <Layout>
      <h1 style={{textAlign: `center`}} className={borderStyles.borderAlternate}>Welcome to the CS@Illinois Mental Health page!</h1>
      <p style={{textAlign: `center`}}>
        This is a place to get information on various mental health resources available to anyone who needs them. There's also a link to the CS Mental Health Forum where you can go to talk to other
        people and get current news on mental health events from different university organizations and other groups in the Champaign-Urbana area.
      </p>
      <p style={{textAlign: `center`}} className={borderStyles.border}>
        In the top-right corner, you'll see a link to a page full of different mental health resources available to you. You'll also see a link to the forum as well. Feel free to explore the site and check out
        all the resources!
      </p>
    </Layout>
  )
}
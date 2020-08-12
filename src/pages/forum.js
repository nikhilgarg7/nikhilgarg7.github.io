import React from "react"
import Layout from "../components/layout"
import borderStyles from "./forum.module.css"
import JSONData from "../../content/forumInformation.json"

export default function Forum() {
    return (
        <Layout>
            <div style={{textAlign: `center`}}>
                <h1 className={borderStyles.borderAlternate}>
                    <a href={JSONData.forumurl}>{JSONData.forumtitle}</a>
                </h1>
                <p className={borderStyles.border}>
                    {JSONData.forumdescription}
                </p>
            </div>
        </Layout>
    )
}
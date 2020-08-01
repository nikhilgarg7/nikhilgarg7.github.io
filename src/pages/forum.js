import React from "react"
import Layout from "../components/layout"
import borderStyles from "./forum.module.css"

export default function Forum() {
    return (
        <Layout>
            <h1 style={{textAlign: `center`}} className={borderStyles.borderAlternate}><a href="https://csmhcillinois.com/login">Click here</a> to access the Illinois CS Mental Health Forum</h1>
            <p style={{textAlign: `center`}} className={borderStyles.border}>
                The Illinois CS Mental Health Forum is a community for people to discuss mental health issues, as well as a place to access mental health resources both on campus and online.
                Events promoting mental health will also be featured on this forum, so make sure to check back from time to time!
            </p>
        </Layout>
    )
}
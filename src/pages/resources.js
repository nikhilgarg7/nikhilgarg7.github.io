import React from "react"
import Layout from "../components/layout"
import ResourceInfo from "../components/resourceInfo"
import ResourceInfoAlt from "../components/resourceInfoAlt"
import Contact from "../components/contact"
import ContactAlt from "../components/contactAlt"
import borderStyles from "./resources.module.css"
import JSONData from "../../content/resourceInformation.json"


export default function Resources() {
    return (
        <Layout>
            <div style={{textAlign: `center`}} className={borderStyles.borderAlternate}>
                <h1>{JSONData.resourcetitle}</h1>
                <p>
                    {JSONData.resourcedescription}
                </p>
            </div>
            
            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.csSOSname}
                    url={JSONData.csSOSurl}
                    description={JSONData.csSOSdescription}>
                </ResourceInfo>
            </div>

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfoAlt
                    title={JSONData.mentoringname}
                    description={JSONData.mentoringdescription}>
                </ResourceInfoAlt>
            </div>

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.awarenessNightname}
                    url={JSONData.awarenessNighturl}
                    description={JSONData.awarenessNightdescription}>
                </ResourceInfo>
            </div>

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfoAlt
                    title={JSONData.socialhourname}
                    description={JSONData.socialhourdescription}>
                </ResourceInfoAlt>
            </div>

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.advisingname}
                    url={JSONData.advisingurl}
                    description={JSONData.advisingdescription}>
                </ResourceInfo>
                <h4>Contact</h4>
                <p>{JSONData.advisingaddress}</p>
                <table>
                    <tr>
                        <th> </th>
                        <th style={{textAlign: `center`}}><h5>{JSONData.advisortitle}</h5></th>
                        <th> </th>
                    </tr>
                    <tr>
                        <th style={{textAlign: `center`}}>{JSONData.advisor1name}</th>
                        <th style={{textAlign: `center`}}>{JSONData.advisor2name}</th>
                        <th style={{textAlign: `center`}}>{JSONData.advisor3name}</th>
                    </tr>
                    <tr>
                        <td style={{textAlign: `center`}}>{JSONData.advisor1email}</td>
                        <td style={{textAlign: `center`}}>{JSONData.advisor2email}</td>
                        <td style={{textAlign: `center`}}>{JSONData.advisor3email}</td>
                    </tr>

                </table>
            </div>

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.counselingname}
                    url={JSONData.counselingurl}
                    description={JSONData.counselingdescription}>
                </ResourceInfo>
                <ContactAlt
                    address={JSONData.counselingaddress}
                    phone={JSONData.couselingphone}>
                </ContactAlt>
                <table>
                    <tr>
                        <th style={{textAlign: `center`}}><h5>{JSONData.counselor1title}</h5></th>
                        <th style={{textAlign: `center`}}><h5>{JSONData.counselor2title}</h5></th>
                    </tr>
                    <tr>
                        <th style={{textAlign: `center`}}>{JSONData.counselor1name}</th>
                        <th style={{textAlign: `center`}}>{JSONData.counselor2name}</th>
                    </tr>
                    <tr>
                        <td style={{textAlign: `center`}}>{JSONData.counselor1email}</td>
                        <td style={{textAlign: `center`}}>{JSONData.counselor2email}</td>
                    </tr>
                </table>
            </div>

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.mckinleyname}
                    url={JSONData.mckinleyurl}
                    description={JSONData.mckinleydescription}>
                </ResourceInfo>
                <h4>Contact</h4>
                <p>{JSONData.mckinleyaddress}</p>
            </div>

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.wrcname}
                    url={JSONData.wrcurl}
                    description={JSONData.wrcdescription}>
                </ResourceInfo>
                <Contact
                    address={JSONData.wrcaddress}
                    email={JSONData.wrcemail}
                    phone={JSONData.wrcphone}>
                </Contact>
            </div>

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.dresname}
                    url={JSONData.dresurl}
                    description={JSONData.dresdescription}>
                </ResourceInfo>
                <Contact
                    address={JSONData.dresaddress}
                    email={JSONData.dresemail}
                    phone={JSONData.dresphone}>
                </Contact>
            </div>            

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.pscname}
                    url={JSONData.pscsurl}
                    description={JSONData.pscdescription}>
                </ResourceInfo>
                <ContactAlt
                    address={JSONData.pscaddress}
                    phone={JSONData.pscphone}>
                </ContactAlt>
            </div>

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.veteransname}
                    url={JSONData.veteranssurl}
                    description={JSONData.veteransdescription}>
                </ResourceInfo>
                <ContactAlt
                    address={JSONData.veteransaddress}
                    phone={JSONData.veteransphone}>
                </ContactAlt>
            </div>

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.sacname}
                    url={JSONData.sacurl}
                    description={JSONData.sacdescription}>
                </ResourceInfo>
                <Contact
                    address={JSONData.sacaddress}
                    email={JSONData.sacemail}
                    phone={JSONData.sacphone}>
                </Contact>
            </div>
            
            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.deanname}
                    url={JSONData.deanurl}
                    description={JSONData.deandescription}>
                </ResourceInfo>
                <Contact
                    address={JSONData.deanaddress}
                    email={JSONData.deanemail}
                    phone={JSONData.deanphone}>
                </Contact>
            </div>

            <div style={{textAlign: `center`}} className={borderStyles.border}>
                <ResourceInfo
                    title={JSONData.weCarename}
                    url={JSONData.weCareurl}
                    description={JSONData.weCaredescription}>
                </ResourceInfo>
            </div>

        </Layout>
    )
}
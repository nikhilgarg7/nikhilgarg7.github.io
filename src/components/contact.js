import React from "react"

function contact(props) {
    return (
        <div>
            <h4>Contact</h4>
            <table style={{tableLayout: `fixed`}}>
                <tr>
                    <td style={{textAlign: `center`}}>{props.address}</td>
                    <td style={{textAlign: `center`}}>{props.phone}</td>
                    <td style={{textAlign: `center`}}>{props.email}</td>
                </tr>
            </table>
        </div>
    )
}

export default contact;
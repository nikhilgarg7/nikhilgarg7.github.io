import React from "react"

function contactAlt(props) {
    return (
        <div>
            {/* <style>
                table {table-layout: fixed;}
            </style> */}
            <h4>Contact</h4>
            <table style={{tableLayout: `fixed`}}>
                <tr>
                    <td style={{textAlign: `center`}}>{props.address}</td>
                    <td style={{textAlign: `center`}}>{props.phone}</td>
                </tr>
            </table>
        </div>
    )
}

export default contactAlt;
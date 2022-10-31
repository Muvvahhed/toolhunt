import React from "react";

function User(props) {
    return(
        <tr>
            <td><a href="#">{props.userName}</a></td>
            <td>{props.edits}</td>
        </tr>
    )

}

export default User
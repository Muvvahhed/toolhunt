import React, {useState} from "react";
import SubmitForm from "./SubmitForm";

function Task() {
    const [accept, setAccept] = useState(false)
    function handleClick() {
        setAccept(true)
    }

    function buttons(){
        return(
            <div className="row justify-content-between">
                <div className="col-5">
                    <button className="btn btn-md btn-success" onClick={handleClick}>Accept</button>
                </div>
                <div className="col-5">
                    <button className="btn btn-md btn-primary">Next</button>
                </div>
            </div>
        )
    }

    return(
        <div className="col-6">
            <h2>Task</h2>
            <p><span><a href="#">Pywikibot</a></span> is missing a link to its source repository, can you help find it?</p>
            {/*ternary operator that renders the submit form if task is accepted and the buttons as default*/}
            {accept? <SubmitForm/>: buttons()}
        </div>
    )

}

export default Task
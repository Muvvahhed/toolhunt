import React from "react";
import Task from "./Task";


function Landing(){
    return(
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col">
                    <h3>Guide</h3>
                    <ul>
                        <li>The Toolhub tool below has a missing field(s), your task once accepted is to help find and fill them</li>
                        <li>You can click on any tool to view its details</li>
                        <li>Click Accept! to accept the task or Next! for another Task</li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
                <Task/>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-6">
                    <h5 className="text-success">Tasks Completed: 0</h5>
                </div>
            </div>
        </div>
    )

}


export default Landing
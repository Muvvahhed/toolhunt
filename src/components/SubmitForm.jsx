import React from "react"

function submitForm(){
    return(
        <form>
            <div className="row">
                <div className="col-md-7 col-xs-auto"><input placeholder="source repository link" className="form-control" type="url"/></div></div>
            <div className="row justify-content-between mt-2">
                <div className="col-6">
                    <button className="btn btn-md btn-success mt-2">Submit</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-md btn-outline-warning mt-2">Skip</button>
                </div>
            </div>
        </form>
    )
}

export default submitForm

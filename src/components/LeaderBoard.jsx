import React from "react";
import users from "../users.js" //array of user objects
import UserProfile from "./User" //user component

function LeaderBoard(){
    return(
        <div className="container-fluid">
            <h3 className="text-center mt-3 mb-3">LeaderBoard</h3>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                         <table className="table">
                            <thead className="table">
                                <tr>
                                    <th>User</th>
                                    <th>Edits</th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* mapping all user objects from users array to a UserProfile component */}
                            {users.map((user) =>
                                <UserProfile userName={user.userName} edits={user.edits} />
                            )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard
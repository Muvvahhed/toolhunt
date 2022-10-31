import React, {useState} from "react";
import Landing  from "./Landing.jsx"
import DashBoard from "./DashBoard.jsx"
import LeaderBoard from "./LeaderBoard.jsx"
import Navigation from "./Navigation";

function App() {
    const[page, setPage] = useState("landing")
    function currentPage(page){
        setPage(page)
    }
    return(
        <div>
            <Navigation currentpage={currentPage} />
            {/**/}
            {page === "landing" && <Landing/>}
            {page === "dashBoard" && <DashBoard/>}
            {page === "leaderBoard" && <LeaderBoard/>}
        </div>
    )

}


export default App;

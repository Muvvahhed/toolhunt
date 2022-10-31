import React, {useState} from "react";
import Landing  from "./Landing.jsx" // landing page component
import DashBoard from "./DashBoard.jsx" // dashboard component
import LeaderBoard from "./LeaderBoard.jsx" // leaderboard page component
import Navigation from "./Navigation"; // navigation bar component

function App() {
    const[page, setPage] = useState("landing") //sets initial page to the landing page
    function currentPage(page){
        setPage(page)
    }
    return(
        <div>
            <Navigation currentpage={currentPage} />
            {/*conditional rendering of pages as the page state changes*/}
            {page === "landing" && <Landing/>}
            {page === "dashBoard" && <DashBoard/>}
            {page === "leaderBoard" && <LeaderBoard/>}
        </div>
    )

}


export default App;

import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'; //for creating progress bars
import 'react-circular-progressbar/dist/styles.css'; //for styling progress bars
import {BarChart, LineChart} from "./charts"; //dashboard Charts



function DashBoard() {
    const value = 1671;
    const percentage =  70;
    return(
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-lg-2 col-sm-4 tile">
                    <CircularProgressbar
                        value={3220}
                        maxValue={3220}
                        text={`${2450}`}
                        styles={buildStyles({
                            pathColor: "#4682B4",
                            textColor: '#4682B4'
                        })} />
                    <h5 className="text-center mt-2">Total Tools</h5>
                </div>
                <div className="col-lg-2 col-sm-4 tile">
                    <CircularProgressbar
                        value={1671}
                        maxValue={1671}
                        text={`${1671}`}
                        styles={buildStyles({
                            pathColor: "#FA8072",
                            textColor: '#FA8072'
                        })} />
                    <h5 className="text-center mt-2">Tools with missing Fields</h5>
                </div>
                <div className="col-lg-2 col-sm-4 tile">
                    <CircularProgressbar
                        value={68}
                        maxValue={100}
                        text={`${68}%`}
                        styles={buildStyles({
                                pathColor: "#FFD700",
                                textColor: '#FFD700'
                        })}/>
                    <h5 className="text-center mt-2">Percentage of tools with missing information</h5>
                </div>
                <div className="col-lg-2 col-sm-4 tile">
                    <CircularProgressbar
                        value={200}
                        maxValue={200}
                        text={`${200}`}
                        styles={buildStyles({
                                pathColor: "#00FF7F",
                                textColor: '#00FF7F'
                        })}/>
                    <h5 className="text-center mt-2">Tools Edited</h5>
                </div>
                <div className="col-lg-2 col-sm-4 tile">
                    <CircularProgressbar
                        value={17}
                        maxValue={17}
                        text={`${17}`}
                        styles={buildStyles({
                                pathColor: "#9370DB",
                                textColor: '#9370DB'
                        })}/>
                    <h5 className="text-center mt-2">Tasks Skipped</h5>
                </div>
                <div className="row">
                    <div className="col-8">
                         <BarChart/>
                    </div>
                    <div className="col-4">
                         <LineChart/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashBoard
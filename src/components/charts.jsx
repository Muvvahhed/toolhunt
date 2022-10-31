import React from "react";
import Plot from 'react-plotly.js';

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))

const BarChart = (props) =>{
  const data = [
   {
        x: ['developer_docs', 'tool_type', 'icon', 'bug_tracker_url', 'repository'],
        y: [1500, 1300, 1002, 700, 500],
        type: 'bar'
  }
  ];

    return(
      <Plot
      data={data}
      layout={ {width: 800, height: 300, title: 'Frequently Missing Tool Info'} } />
    )
}

const LineChart = (props) =>{
  const data = [
   {
        x: ["sun","mon", "tues", "wed", "thurs", "fri", "sat"],
        y: [20, 10, 17, 56, 40, 22, 35, ],
        type: 'scatter'
  }
  ];

    return(
      <Plot
      data={data}
      layout={ {width: 400, height: 300, title: 'Tasks Completed'} } />
    )
}



export {BarChart, LineChart}
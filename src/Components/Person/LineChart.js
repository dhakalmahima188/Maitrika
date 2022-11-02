import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

 const labels = ["10", "20", "30", "40", "50", "60"];



const data = {
  labels: labels,
  datasets: [
    {
      label: "BMI",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [[10,10],[20,20],[30,30],[39,14] ],
    },
  ],
};
const options = {
  scales: {
    y:
      {
        min: 10,
        max: 40,
        stepSize: 5,
      },
    x:
      {
       
      },
  },
};


const LineChart = (props) => {
  return (
    <div>
      <Line data={data}   options={options}/>

    </div>
  );
};

export default LineChart;
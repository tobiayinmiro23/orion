import React from 'react'
import { Bar } from "react-chartjs-2";
import '../styles/ChartStyle.css'


const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
            <Bar
            data={chartData}
            options={{
                plugins: {
                title: {
                    display: true,
                    text: "Users Gained between 2016-2020"
                }
                }
            }}
            />
    </div>
  )
}

export default BarChart
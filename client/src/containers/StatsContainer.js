import { Chart } from "react-google-charts";
import React from "react";

function StatsContainer () {

    const pieData = [
        ["Quiz", "Total Questions"],
        ["Answered correctly", 11],
        ["Answered incorrectly", 2],
        ["Not yet attempted", 2]
      ];
      
    const pieOptions = {
        title: "Your performance so far...",
        colors:['#B8D8BA','#EF959D', '#FCDDBC'],
      };
      
    const data = [
        ["Questions", "Wow! This number is high", "Eh, this number is mid tbh","Oof this number is low"],
        ["Score", 1000, 500, 250],
      ];
      
    const options = {
        title: "This is the title of the bar chart",
        chartArea: { width: "50%" },
        colors: ["#B8D8BA", "#EF959D", '#FCDDBC'],
        hAxis: {
          title: "Total Population",
          minValue: 0,
        },
        vAxis: {
          title: "Score",
        },
      };

    return (
        <>
          <Chart
            chartType="PieChart"
            data={pieData}
            options={pieOptions}
            width={"100%"}
            height={"400px"}
          />
            <Chart
                chartType="Bar"
                width="90%"
                height="400px"
                data={data}
                options={options}
              />
              </>
    )
    }

export default StatsContainer
import { Chart } from "react-google-charts";
import React from "react";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
function StatsContainer () {

    let name = "PersonName"

    const pieData = [
        ["Quiz", "Total Questions"],
        ["Answered correctly", 11],
        ["Answered incorrectly", 2],
        ["Not yet attempted", 2]
      ];
      
    const pieOptions = {
        colors:['#B8D8BA','#EF959D', '#FCDDBC'],
      };
      
    const barData = [
        ["Hello", "Articles you've read", "Articles you've still to read"],
        ["Score", 12, 4],
      ];
      
    const barOptions = {
        chartArea: { width: "50%" },
        colors: ["#033F63", "#FEDC97"],
        bars: "horizontal"
      };

    return (
      <>
      <h2>Hello {name}, here's your performance so far...</h2>

      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,
        },
      }}
    >
      <Paper elevation={3}>
        <h4>How many of articles have you read?</h4>
      <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              data={barData}
              options={barOptions}
              />
      </Paper>
      <Paper elevation={3}>
      <h4>How did you score in the quizzes?</h4>
      <Chart
              chartType="PieChart"
              data={pieData}
              options={pieOptions}
              width={"80%"}
              height={"400px"}
              />
      </Paper>
    </Box>
 
        </>
    )
    }

export default StatsContainer
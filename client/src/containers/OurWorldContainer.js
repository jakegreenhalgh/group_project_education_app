
import { getOurWorld } from '../WebsiteService';
import {useState, useEffect}  from 'react';
import { Chart } from "react-google-charts";

// constructs Category Container 
function OurWorldContainer() {

    const [ourWorld, setOurWorld] = useState([])

// on page load categories will be fetched and set as out state
    useEffect(()=>{
        getOurWorld().then((result)=>{
          setOurWorld(result);
        })
      }, []); 
      
      if(ourWorld.length){
    const leopardData = [
        ["Year", "Estimated Number"],
        ["2000", ourWorld[0].content[0].estimated_number_2000],
        ["2005", ourWorld[0].content[0].estimated_number_2005],
        ["2015", ourWorld[0].content[0].estimated_number_2015],
        ["2022", ourWorld[0].content[0].estimated_number_2022],
      ];
      
    const leopardOptions = {
        title: ourWorld[0].content[0].name,
        curveType: "function",
        legend: { position: "bottom" },
        colors: ['#F9C80E']
      };

      const tigerData = [
        ["Year", "Estimated Number"],
        ["2000", ourWorld[0].content[1].estimated_number_2000],
        ["2005", ourWorld[0].content[1].estimated_number_2005],
        ["2015", ourWorld[0].content[1].estimated_number_2015],
        ["2022", ourWorld[0].content[1].estimated_number_2022],
      ];
      
    const tigerOptions = {
        title: ourWorld[0].content[1].name,
        curveType: "function",
        legend: { position: "bottom" },
        colors: ['#F86624']
      };
         
    


// passing down all the fetched categories as a prop to categories list
      return (
        <>
          <div>
                <h2>
                    {ourWorld[0].category}
                </h2>
                <p>{ourWorld[0].description}</p>
                <div>
                   <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={leopardData}
                        options={leopardOptions}
                    />
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={tigerData}
                        options={tigerOptions}
                    />
                </div>
          </div>
        </>
      )
}
}
export default OurWorldContainer;
 
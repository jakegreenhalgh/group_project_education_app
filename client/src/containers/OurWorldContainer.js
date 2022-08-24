
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

          <div>
          <h2>
                    {ourWorld[1].category}
                </h2>
                <p>{ourWorld[1].content[0].text}</p>
                <ul>
                    <li>
                       <p> {ourWorld[1].content[0].name} </p>
                       <p> cm rising water Estimated number 2000: {ourWorld[1].content[0].estimated_number_2000}</p> 
                       <p>Estimated number 2005: {ourWorld[1].content[0].estimated_number_2005}</p> 
                       <p>Estimated number 2015: {ourWorld[1].content[0].estimated_number_2015}</p> 
                       <p>Estimated number 2022: {ourWorld[1].content[0].estimated_number_2022}</p> 
                    </li>

                </ul>
          </div>
          <div>
          <h2>
                    {ourWorld[2].category}
                </h2>
                <p>{ourWorld[2].description}</p>
                <ul>
                    <li>
                       <p> {ourWorld[2].content[1].name} </p>
                       <p> % of lost trees or something Estimated number 2000: {ourWorld[2].content[1].estimated_tree_loss_2000}</p> 
                       <p>Estimated number 2005: {ourWorld[2].content[1].estimated_tree_loss_2005}</p> 
                       <p>Estimated number 2015: {ourWorld[2].content[1].estimated_tree_loss_2015}</p> 
                       <p>Estimated number 2022: {ourWorld[2].content[1].estimated_tree_loss_2022}</p> 
                    </li>

                </ul>
          </div>
        
        </>
      )
}
}
export default OurWorldContainer;
 
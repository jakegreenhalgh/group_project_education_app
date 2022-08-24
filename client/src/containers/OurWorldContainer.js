
import { getOurWorld } from '../WebsiteService';
import {useState, useEffect}  from 'react';
import { Chart } from "react-google-charts";
import './ourStats.css'

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

      const seaData = [
        ["Year", "cm rising water"],
        ["2000", ourWorld[1].content[0].estimated_number_2000],
        ["2005", ourWorld[1].content[0].estimated_number_2005],
        ["2015", ourWorld[1].content[0].estimated_number_2015],
        ["2022", ourWorld[1].content[0].estimated_number_2022],
      ];
      
    const seaOptions = {
        title: ourWorld[1].content[0].name,
        curveType: "function",
        legend: { position: "bottom" },
        colors: ['#43BCCD']
      };

      const forestData = [
        ["Year", "% of lost trees"],
        ["2000", ourWorld[2].content[1].estimated_tree_loss_2000],
        ["2005", ourWorld[2].content[1].estimated_tree_loss_2005],
        ["2015", ourWorld[2].content[1].estimated_tree_loss_2015],
        ["2022", ourWorld[2].content[1].estimated_tree_loss_2022],
      ];
      
    const forestOptions = {
        title: ourWorld[2].content[1].name,
        curveType: "function",
        legend: { position: "bottom" },
        colors: ['#537A5A']
      };
    


// passing down all the fetched categories as a prop to categories list
      return (
        <>
          <div className='graph-wrapper'>
                <h2>
                    {ourWorld[0].category}
                </h2>
                <p>{ourWorld[0].description}</p>
                <div  className='graph-box'>
                   <Chart key={Date.now()}
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={leopardData}
                        options={leopardOptions}
                    />
                </div>    
                <div className='graph-box'>
                    <Chart key={Date.now()}
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={tigerData}
                        options={tigerOptions}
                    />
                </div>
          </div>
    
        <div className='graph-wrapper'>
            <h2>
                    {ourWorld[1].category}
                </h2>
            
                <p>{ourWorld[1].content[0].text}</p>
                <div  className='graph-box'>
                <Chart key={Date.now()}
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={seaData}
                        options={seaOptions}
                    />
                </div>
          </div>
          
          <div className='graph-wrapper'>
          <h2>
                    {ourWorld[2].category}
                </h2>
                <p>{ourWorld[2].description}</p>
                       <p> {ourWorld[2].content[1].name} </p>
                       <div  className='graph-box'>
                       <Chart key={Date.now()}
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={forestData}
                        options={forestOptions}
                    />
                    </div>
          </div>
        
        </>
      )
}
}
export default OurWorldContainer;
 
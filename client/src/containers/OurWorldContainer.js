
import { getOurWorld } from '../WebsiteService';
import {useState, useEffect}  from 'react';


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
// passing down all the fetched categories as a prop to categories list
      return (
        <>
          <div>
                <h2>
                    {ourWorld[0].category}
                </h2>
                <ul>
                    <li>
                       <p> {ourWorld[0].content[0].name} </p>
                       <p>Estimated number 2000: {ourWorld[0].content[0].estimated_number_2000}</p> 
                       <p>Estimated number 2005: {ourWorld[0].content[0].estimated_number_2005}</p> 
                       <p>Estimated number 2015: {ourWorld[0].content[0].estimated_number_2015}</p> 
                       <p>Estimated number 2022: {ourWorld[0].content[0].estimated_number_2022}</p> 
                    </li>
                    <li>
                       <p> {ourWorld[1].content[1].name} </p>
                       <p>Estimated number: {ourWorld[1].content[1].estimated_number_2000}</p> 
                       <p>Estimated number: {ourWorld[1].content[1].estimated_number_2005}</p> 
                       <p>Estimated number: {ourWorld[1].content[1].estimated_number_2015}</p> 
                       <p>Estimated number: {ourWorld[1].content[1].estimated_number_2022}</p> 
                    </li>
                </ul>
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
 
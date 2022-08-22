import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { showContent } from '../../WebsiteService';
// Import NavBar here for use, same Nav throughout

const TopicCard = ({ topic, categoryId, index }) =>{
    // Didn't use any states as I couldn't see we would require any, as we are displaying only. 


    // Insert Nav here
        // Show topic image header
        // Show topic text 
        // Show small topic image 


    return (
        <>
        <Link to={`/categories/${categoryId}/${topic._id}`} state={topic} ><h2>{topic.name}</h2></Link>
        <div className='Topic-body-text'>
            {topic.description}
        </div>
        <div className='Topic-Header-Image'>
           <img src={topic.images[0].header}/>
        </div>
        <div className='Topic-body-image'>
            <img src={topic.small_image}/>
        </div>
        </>
    )
};

export default TopicCard;









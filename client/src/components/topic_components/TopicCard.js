import { useState, useEffect } from 'react';
// Import NavBar here for use, same Nav throughout

const TopicCard = ({ topic }) =>{
    // Didn't use any states as I couldn't see we would require any, as we are displaying only. 

    return (
        <>
        // Insert Nav here
        // Show topic image header
        <div className='Topic-Header-Image'>
           <img src={topic.image}/>
        </div>
        // Show topic text 
        <div className='Topic-body-text'>
            {topic.description}
        </div>
        // Show small topic image 
        <div className='Topic-body-image'>
            <img src={topic.small_image}/>
        </div>
        </>
    )
};

export default TopicCard;









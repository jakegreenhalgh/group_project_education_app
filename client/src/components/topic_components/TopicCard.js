import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { showContent } from '../../WebsiteService';
import './topic.css';
// Import NavBar here for use, same Nav throughout

const TopicCard = ({ topic, categoryId, index }) =>{
    // Didn't use any states as I couldn't see we would require any, as we are displaying only. 
    const passData = [topic, categoryId]

    // Insert Nav here
        // Show topic image header
        // Show topic text 
        // Show small topic image 



    return (
        <>

        <div className='card'>
        <Link to={`/categories/${categoryId}/${topic._id}`} state={passData} ><h2>{topic.name}</h2>
        <br/>


        <div className='Topic-Header-Image'>
            <img src={topic.images[0].header}/>
        </div>
        <div className='Topic-header-text'>
            {topic.description}
        </div>
        </Link>
        <div className='Topic-body-image'>
            <img src={topic.small_image}/>
        </div>
        </div>
        </>
    )
};

export default TopicCard;









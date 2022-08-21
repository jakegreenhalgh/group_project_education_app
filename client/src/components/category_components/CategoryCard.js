import {useState, useEffect } from 'react';
// Import the nav bar 
// Topic import/ route required? 

const CategoryCard = ({ category }) => {
    // require a state here for topic click? 

    return (
        <>
        <div className='Nav-bar'>
        // Code to return nav bar here
        </div>
        <div className='Category-Header-Image'>
        <img src={category.header_image}/>
        </div>
        <div className = 'Topic-menu'>
            {/* Need a list of topic images and titles  */}
        </div>
        </>
        
    
    )


    }





// Large header image of the chosen category
// Display of images from category, with a title that has on click function to take to topic. 

// 
// return everything in the display
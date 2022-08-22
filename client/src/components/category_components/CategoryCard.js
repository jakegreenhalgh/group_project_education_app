import {useState, useEffect } from 'react';
// Import the nav bar 
// Topic import/ route required? 

const CategoryCard = ({ category }) => {

// const topics = categories.topics.map(topic => {
//     return <Topic
//         key= {topic._id}
//         topic= {topic}
//     />
// });

// Would like to like topic images to topic cards here- new component name?- Discuss with group */
    return (
        <>
        <div className='Nav-bar'>
            <p>{category.category}</p>
        // Code to return nav bar here
        </div>
        <div className='Category-Header-Image'>
        <img src={category.header_image}/>
        </div>
        <div className = 'Topic-menu'>
        </div>
        </>
    
    )

    };

    export default CategoryCard;

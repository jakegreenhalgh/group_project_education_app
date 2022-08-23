import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import TopicContainer from "../../containers/TopicContainer";
import './category.css';
// Import the nav bar 
// Topic import/ route required? 


const CategoryCard = ({ category }) => {

// Would like to like topic images to topic cards here- new component name?- Discuss with group */
    return (
    <>
        <Link to={`/categories/${category._id}`}> 
        
        <div className='Nav-Bar'>
        <h2>{category.category}</h2>    
        </div>
        </Link>
        <div className='Category-Descriptor'>
            <p>{category.description}</p>
        </div>
        <Link to={`/categories/${category._id}`}> 
        <div className='Cat-Image'>
            <img src={category.image} width="1000" height="600"/>
        </div>
        </Link>
        
        
    </>
    )};

    export default CategoryCard;

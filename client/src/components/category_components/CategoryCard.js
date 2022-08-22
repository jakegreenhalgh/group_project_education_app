import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import TopicContainer from "../../containers/TopicContainer";
// Import the nav bar 
// Topic import/ route required? 

const CategoryCard = ({ category }) => {

// Would like to like topic images to topic cards here- new component name?- Discuss with group */
    return (
    <>
        <div className='Nav-bar'>
            <Link to={`/categories/${category._id}`}> <h2>{category.category}</h2></Link>
        </div>
        <div className='Category-Header-Image'>
        <img src={category.image}/>
        <p>{category.description}</p>
        </div>
    </>
    
    )

    };

    export default CategoryCard;

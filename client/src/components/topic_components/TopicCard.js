import { Link } from 'react-router-dom';
import './topic.css';

const TopicCard = ({ topic, categoryId, index }) =>{

    const passData = [topic, categoryId]





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









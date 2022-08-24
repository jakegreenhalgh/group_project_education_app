import './content.css';

const ContentCard = ({ content }) => {

    // Would like to like topic images to topic cards here- new component name?- Discuss with group */
        return (
        <>
            <div className='header-container'>
                <div className='header-image'>
                <img src={content.images[0].header}/>
                </div>

                <div className='article-header'> 
                <h2>{content.name}</h2>
                </div>
            </div>
            
            
            <div className='article-body'>
            <p>{content.text}</p>
            <p>{content.text2}</p>
            <p>{content.text3}</p>
            <p>{content.text4}</p>
            </div>

            <div className='article-image'>
            <img src={content.images[1].body1}/> 
            </div>
        </>
        
        )
    
        };
    
    

export default ContentCard;
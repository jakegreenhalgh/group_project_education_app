const ContentCard = ({ content }) => {

    // Would like to like topic images to topic cards here- new component name?- Discuss with group */
        return (
        <>
            <div className='Nav-bar'>
            <img src={content.images[0].header}/>    
            <h2>{content.name}</h2>
            <p>{content.text}</p>
            <img src={content.images[1].body1}/>  
            </div>
            <div className='Category-Header-Image'>
            </div>
        </>
        
        )
    
        };
    
    

export default ContentCard;
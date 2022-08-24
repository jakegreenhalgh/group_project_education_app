import './content.css';
import { findActiveUser, saveUserFavData,  saveUserReadData} from '../../LoginService'
import {DoneAllIcon} from '@mui/icons-material/DoneAll';

import Icon from '@mui/material/Icon';


const ContentCard = ({ content , user , categoryId}) => {

const saveFav = () => {

  if(user.favourites.length !== 0){
    let compareArray = user.favourites.map(fav => fav.id)
    let contentFound = compareArray.includes(content._id)
    let newFavData = {
      id: content._id,
      name: content.name,
      catId: categoryId,
      topic : content 
    }
    if (contentFound === false) {
      user.favourites.push(newFavData)
      saveUserFavData(user._id, user.favourites)
    }
  } else{
    let newFavData = {
        id: content._id,
        name: content.name,
        catId: categoryId, 
        topic: content
      }
    user.favourites.push(newFavData)
    saveUserFavData(user._id, user.favourites)
  }
}
const saveRead = () => {

  if(user.favourites.length !== 0){
    let compareArray = user.read.map(read => read.id)
    let contentFound = compareArray.includes(content._id)
    let newReadData = {
      id: content._id,
      name: content.name,
      catId: categoryId 
    }
    if (contentFound === false) {
      user.read.push(newReadData)
      saveUserReadData(user._id, user.read)
    }
  } else{
    let newReadData = {
        id: content._id,
        name: content.name,
        catId: categoryId 
      }
    user.favourites.push(newReadData)
    saveUserReadData(user._id, user.read)
  }
}



    // Would like to like topic images to topic cards here- new component name?- Discuss with group */
        return (
        <>
            <div className='header-container'>
                <div className='header-image'>
                <img src={content.images[0].header}/>
                </div>

                <div className='article-header'> 
                <div className='button-box'>
                { user ?<> <button onClick={saveFav} className='user-button' > ❤ </button>  <button onClick={saveRead} className='user-button'>＋</button>  </>: null}
                </div>
                <h2>{content.name}</h2>
                </div>
            </div>
           
            
            <div className='article-body'>
            <p>{content.text}</p>

            <div className='article-image'>
            <img src={content.images[1].body1}/> 
            </div>
            
            <p>{content.text2}</p>
            <p>{content.text3}</p>
            <p>{content.text4}</p>
            </div>


        </>
        
        )
    
        };
    
    

export default ContentCard;

import {useState, useEffect}  from 'react';
import {useLocation} from 'react-router-dom';
import ContentCard from '../components/Content_Components/ContentCard';
import QuizContainer from './QuizContainer';
import { findActiveUser, saveUserQuizData } from '../LoginService'



function ContentContainer() {

    const [activeUser, setActiveUser] = useState(false);

    useEffect(() => {
        findActiveUser().then((result => { setActiveUser(result)} ))
    }, [])

    const location = useLocation();
    const data = location.state;
console.log(data)
    const [content, setContent] = useState(data[0])
    const categoryId = data[1]






if ( content.type === "article"){
    return (
        <>
            <ContentCard content={content} user={activeUser} categoryId={categoryId}/>
        </>
      )
}
else if (content.type === "quiz"){
    return(
            <QuizContainer quiz={content}/>
        )
}else{
    return( 
            <p>error</p>
        )
    }

}

export default ContentContainer;
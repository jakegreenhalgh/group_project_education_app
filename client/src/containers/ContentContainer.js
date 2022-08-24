// Components - None
import {useState, useEffect}  from 'react';
import {useLocation} from 'react-router-dom';
import ContentCard from '../components/Content_Components/ContentCard';
import QuizList from '../components/quiz_components/QuizList';
import QuizContainer from './QuizContainer';
import { findActiveUser, saveUserQuizData } from '../LoginService'

// think we will need to pass something down to this like the name of the content added ?
// constructs ContentContainer

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




    // console.log(data);

// on page load a category will be fetched by id and i think we match the name with a for loop and set it as state
    // useEffect(()=>{
    //     setContent(data)
    //      },[data])

    // setContent(location.state)


// console.log(content);




if ( content.type === "article"){
// we said this would have no components but i think it will need two one for article and one for quiz
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

// pretty sure this should allow us to load a quiz or a article properly but we need to figure out how we are going to navagate
// between a new article and a quiz eg. a back and forward button
// then we will need a AticleCard and a Quiz Card, the quiz logic can go in here 
export default ContentContainer;
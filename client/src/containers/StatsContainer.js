import { Chart } from "react-google-charts";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {findActiveUser} from '../LoginService'
import { getCategories } from "../WebsiteService";
import FavouritesList from "../components/favourites_components/FavourtiesList";
function StatsContainer () {

  const [user, setUser] = useState()
  const [categories, setCategories] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
      findActiveUser().then((result => { setUser(result)} ))
      getCategories().then((result) => {setCategories(result)} )  
  }, [])

    if(!user){
      navigate("../login")
        } else {

    const total_correct = () => {
      let total = 0
      for (let quiz of user.saved_quiz) {
        total += quiz.score
      }
      return total
    }

    const total_incorrect = () => {
      let total = 0
      for (let quiz of user.saved_quiz) {
        total += quiz.incorrect
      }
      return total
    }

    const total_read = user.read.length

    const total_articles = () => {
      if (categories) {
      let total = 0
      for (let index = 0; index < categories.length; index++) {
        const category = categories[index];
        for (let index = 0; index < category.content.length; index++) {
          const content = category.content[index];
          if (content.type === 'article') {
            total +=1
          }
      
    }
      }
      return total
    }
    }
    const total_unread = total_articles() - total_read
    

    const pieData = [
        ["Quiz", "Total Questions"],
        ["Answered correctly", total_correct()],
        ["Answered incorrectly", total_incorrect()]
      ];
      
    const pieOptions = {
        title: "How have you scored in the quizzes?",
        colors:['#B8D8BA','#EF959D', '#FCDDBC'],
      };
      
    const barData = [
        ["Hello", "Articles you've read", "Articles you've still to read"],
        ["Score", total_read, total_unread],
      ];
      
    const barOptions = {
        chartArea: { width: "50%" },
        colors: ["#033F63", "#FEDC97"],
        bars: "horizontal"
      };

    return (
      <>
      <h2>Hello {user.username}, here's your performance so far...</h2>
            <Chart key={Date.now()}
              chartType="PieChart"
              data={pieData}
              options={pieOptions}
              width={"80%"}
              height={"400px"}
              />
        <h4>How many of our articles have you read?</h4>
          <Chart key={Date.now()}
              chartType="Bar"
              width="80%"
              height="400px"
              data={barData}
              options={barOptions}
              />
        <h4>Your favourite articles</h4>
        <FavouritesList favourites={user.favourites} key={user.id}/>
        </>
    )}
    }

export default StatsContainer
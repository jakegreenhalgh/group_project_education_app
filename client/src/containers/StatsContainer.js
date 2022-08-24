import { Chart } from "react-google-charts";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {findActiveUser} from '../LoginService'
import { getCategories } from "../WebsiteService";
import FavouritesList from "../components/favourites_components/FavourtiesList";

import './StatsContainer.css'

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
        colors:['#B8D8BA','#EF959D', '#FCDDBC'],
      };
      
    const barData = [
        [" ", "Articles you've read", "Articles you've still to read"],
        [" ", total_read, total_unread],
      ];
      
    const barOptions = {
        // chartArea: { width: "80%" },
        colors: ["#033F63", "#FEDC97"],
        bars: "horizontal",

      };

    return (
      <>
    
    <h1 className="profile-title">Hi {user.username},</h1> 
    <h2 className="profile-sub">here's your performance so far...</h2>

      <div className="stats-box-main">


            <div className="stats-box-sub">

                <div className="chart1">
                  <h4>Your Quiz Scores:</h4>
                    <Chart
                      chartType="PieChart"
                      data={pieData}
                      options={pieOptions}
                      width="50%"
                      height="50%"
                      />
                </div>

                <div className="chart2">

                    <h4>Articles You've Read:</h4>
                    <Chart
                      chartType="Bar"
                      data={barData}
                      options={barOptions}
                      width="50%%"
                      height="80%"
                      />
                </div>


             </div>

          <div className="fave-list">
            <h4>Your favourite articles</h4>
            <FavouritesList favourites={user.favourites} key={user.id}/>

          </div>

        </div>
        </>
    )}
    }

export default StatsContainer
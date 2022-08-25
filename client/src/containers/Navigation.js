// React Router
// Components - NavBar

import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import CategoryContainer from "./CategoryContainer";
// import NavBar from "../components/NavBar";
import HomePage from "../HomePage";
import TopicContainer from "./TopicContainer";
import ContentContainer from "./ContentContainer";
import LoginContainer from "./LoginContainer";
import LoginError from "../components/login_components/LoginError";
import RegisterContainer from "./RegisterContainer";
import StatsContainer from "./StatsContainer";
import RegisterError from "../components/login_components/RegisterError";
import OurWorldContainer from "./OurWorldContainer";
import AppNav from "../components/NavBar";


import Footer from "../components/Footer";



function NavgationContainer() {

/* <Route exact path="/" element={<HomePage></HomePage>} /> */
// renders our navgation bar (will most likely be a header)
// / is our home page
// /catogries is a list of all categories
// /categories/:id is the link to all topics in a category 
return (
    
    <Router>

        <div className="wrapper">
            <AppNav />
            {/* <ButtonAppBar/> */}

            

        <Routes>
            <Route exact path="/" element={< HomePage/>} />
            <Route exact path="/login" element={<LoginContainer/>}/>
            <Route exact path="/categories" element={< CategoryContainer/>} />
            <Route path="/categories/:categoryId" element={<TopicContainer />}/>
            <Route path="/register" element={<RegisterContainer/>}/>
            <Route path="/categories/:categoryId/:contentId" element={<ContentContainer/>}/>
            <Route path='/ourstats' element ={<OurWorldContainer />}/>
            <Route path="/loginerror" element={<LoginError/>}/>
            <Route path="/registererror" element={<RegisterError/>}/>
            <Route path="/statistics/" element={<StatsContainer/>}/>

            <Route exact path="*"></Route>
        </ Routes>

        <Footer />

        </div>
    </Router>
);
}


export default NavgationContainer
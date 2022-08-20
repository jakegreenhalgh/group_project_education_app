// React Router
// Components - NavBar

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryContainer from "./CategoryContainer";
import NavBar from "../components/NavBar";
function NavgationContainer() {

/* <Route exact path="/" element={<HomePage></HomePage>} /> */
// renders our navgation bar (will most likely be a header)
return (
    <>
        <Router>
            <NavBar />

        <Routes>
            
            <Route exact path="/categories" element={< CategoryContainer/>} />
            <Route exact path="*"></Route>
        </ Routes>

    </Router>
</>
);
}


export default NavgationContainer
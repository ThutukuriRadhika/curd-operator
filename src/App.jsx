import React from "react";
import Createusers from "./Components/Createusers";
import Homecrud from "./Components/Homecrud";
import Users from "./Components/Users";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Editusers from "./Components/Editusers";
const App = () => {
    return(
        <div>
         {/* <Homecrud/> */}
         <BrowserRouter>
         <Homecrud/>
         <Routes>
            <Route path="/create" element={<Createusers/>}></Route>
            <Route path="/user" element={<Users/>}></Route>
            <Route path="/edit/:index" element={<Editusers/>}></Route>
         </Routes>
         </BrowserRouter>
        </div>
    )
}
export default App
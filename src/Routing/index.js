import React, { useContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import NavBar from '../Components/Navbar' 
import Home from '../Pages/Home';
import MyProjects from '../Pages/MyProjects';
import AboutMe from '../Pages/AboutMe'
import Contact from '../Pages/Contact'
import { Loader } from '@mantine/core';

import PortfolioContext from '../Context/PortfolioContext';
const Rutas = [{
    name: "Home",
    path: "/",
    icon: '' ,
    subMenu: [],
    component: <Home/>,
},
{
    name: "My Projects",
    path: "/projects",
    icon: '' ,
    subMenu: [],
    component: <MyProjects/>,
},
{
    name: "About Me",
    path: "/aboutMe",
    icon: '' ,
    subMenu: [],
    component: <AboutMe/>,
},{
    name: "Contact",
    path: "/contact",
    icon: '' ,
    subMenu: [],
    component: <Contact/>,
},
]


const Routing = () => {
    const{} = useContext(PortfolioContext)
    return (
        <>

            <Router> 
                <NavBar/>
            <Routes>
                
                {Rutas.map(x =>
                    <Route
                        exact
                        path={x.path}
                        element={
                                x.component
                        }
                    >
                    </Route>
                )
                }
                
            </Routes>


    </Router>

         

              

   
        </>
    )
}

export default Routing
export {Rutas}
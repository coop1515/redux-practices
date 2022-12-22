import React from 'react';
import { Routes } from 'react-router'
// 옛날방식
// import { HashRouter as Router, Route } from 'react-router-dom'; 
import { BrowserRouter as Router, Route } from "react-router-dom"
import Detail from '../routes/Detail';
import Home from '../routes/Home';
function App() {
    return (

        <Router>
            <Routes>
                {/* 옛날 방식
                <Route path="/" exact component ={Home}></Route>
                <Route path="/:" component ={Detail}></Route> */}

                {/* React 18 방식 */}
                <Route path="/"  element={<Home/>}></Route>
                <Route path="/i" element={<Detail/>}></Route>
            </Routes>
        </Router>
    )

}

export default App

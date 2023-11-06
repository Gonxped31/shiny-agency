import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelancers from "./pages/Freelancers";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route exact path={"/"} element={<Home />} />
                <Route path={"/survey/:questionNumber"} element={<Survey />} />
                <Route path={"/results"} element={<Results />} />
                <Route path={"/freelancers"} element={<Freelancers />} />
                <Route path={"*"} element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);
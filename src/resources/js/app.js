/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
// import { About } from "./pages/About";
import { Work } from "./pages/Work";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Home()} />
                <Route path="/work" element={Work()} />
            </Routes>
        </BrowserRouter>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}



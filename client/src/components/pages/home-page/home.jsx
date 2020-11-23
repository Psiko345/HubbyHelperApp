import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from './logo.svg';

function HomePage() {
    const location = useLocation();

    return (
        <div className="icon">
            <p>
                Give me something to buy!
            </p>
            <Link to="/gift_generator" className={location.pathname === "/gift_generator" ? "nav-link active" : "nav-link"}>
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
        </div>

    )
}

export default HomePage;
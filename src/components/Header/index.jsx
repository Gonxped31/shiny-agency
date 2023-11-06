import * as React from 'react';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <Link to={'/'}>Home</Link><br/>
            <Link to={`/survey/1`}>Survey</Link><br/>
            <Link to={'results'}>Results</Link><br/>
            <Link to={'freelancers'}>Freelancers</Link><br/>
        </nav>
    );
}
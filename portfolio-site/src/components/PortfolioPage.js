import React from 'react';
import {NavLink} from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1>My Work</h1>
        <p>Checkout the following things I've done</p>
        <NavLink to='/portfolio/1' activeClassName='is-active'>Thing One</NavLink>
        <NavLink to='/portfolio/2' activeClassName='is-active'>Thing Two</NavLink>
    </div>
);

export default HomePage;
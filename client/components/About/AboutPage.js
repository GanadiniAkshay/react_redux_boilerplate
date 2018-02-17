import React from 'react';
import { browserHistory, Link } from 'react-router';

class AboutPage extends React.Component{
    render(){
        return (
            <div className="fluid-container">
                <nav>
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={'/'}>Home</Link></li>
                        <li className="active"><Link to={'/about'}>About</Link></li>
                    </ul>
                    </div>
                </nav>
                <h3 style={{"textAlign":"center"}}>React Redux Boilerplate</h3>
                <p style={{"textAlign":"center"}}>This is the about page of the boiler plate</p>
            </div>
        )
    }
}

export default AboutPage;
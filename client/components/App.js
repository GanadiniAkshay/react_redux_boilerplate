import React from 'react';
import { browserHistory, Link } from 'react-router';
 
class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="fluid-container">
                <nav>
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className="active"><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                    </ul>
                    </div>
                </nav>
                <h3 style={{"textAlign":"center"}}>React Redux Boilerplate</h3>
                <p style={{"textAlign":"center"}}>This is the home page of the boiler plate</p>
            </div>
        );
    }
}

export default App;
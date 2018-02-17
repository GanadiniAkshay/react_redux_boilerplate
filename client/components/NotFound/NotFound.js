import React from 'react';
import { browserHistory, Link } from 'react-router';

class NotFound extends React.Component{
    render(){
        return (
            <div>
                <h1 style={{"textAlign":"center"}}>404</h1>
                <div style={{"textAlign":"center"}}>
                    <h5>Page Not Found</h5>
                    Go back to <Link to="/">home</Link>
                </div>
            </div>
        )
    }
}

export default NotFound;
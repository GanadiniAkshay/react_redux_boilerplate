import React from 'react';
import { Route, IndexRoute, NotFoundRoute, browserHistory } from 'react-router';

import App from './components/App';
import AboutPage from './components/About/AboutPage';
import NotFound from './components/NotFound/NotFound'; 

export default (
    <Route path="/" history={browserHistory}>
        <IndexRoute component={App} />
        <Route path="about" component={AboutPage} />
        <Route path="*" component={NotFound} />
    </Route>
)

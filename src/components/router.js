import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Routes= () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route  exact path='/aboutme' component={AboutMe} />
            <Route  exact path='/contact' component={Contact} />
            <Route  exact path='/projects' component={Projects} />
            <Route  exact path='/resume' component={Resume} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
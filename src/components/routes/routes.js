import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Processes from '../processes/processes';
import Stages from '../pages/stages';

const Routes = () => {

    return (
        <Switch>
            <Route path="/" component={Processes} exact />
            <Route path="/stages/:id" component={Stages} />
        </Switch>
    )

}

export default Routes;
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Wizard from './Wizard/Wizard';
import Dashboard from './Dashboard/Dashboard'

function Routes()
{
   
    return(
        // <div>
            <Switch>
                <Route component={Wizard} path='/wizard'/>
                <Route component={Dashboard} path='/'/>
            </Switch>
        // </div>
    )
}

export default Routes;
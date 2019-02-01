import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Part1 from './Part1/Part1';
import Part2 from './Part2/Part2';
import Part3 from './Part3/Part3';

class Wizard extends Component
{
    handleAddHouse()
    {
        
    }

    render()
    {
        return(
            <div>
                <Switch>
                    <Route component={Part1} path={'/wizard/part1'}/>
                    <Route component={Part2} path={'/wizard/part2'}/>
                    <Route component={Part3} path={'/wizard/part3'}/>
                </Switch>
            </div>
        );
    }
}

export default connect()(Wizard);
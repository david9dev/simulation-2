import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import House from './House/House'
import {connect} from 'react-redux';
import {deleteHouse, setHouses} from './../../../ducks/reducer';
import axios from 'axios';

class Dashboard extends Component
{
    componentDidMount()
    {
        if(this.props.houses[0] === 'hasnt mounted yet')
        {
        let obj = {
            type: 'GET',
            payload: []
        };

        axios.get('/api/houses').then((response) =>
            {
            obj.payload = response.data;
            this.props.setHouses(obj);
            })
        }
    }

    handleDelete(id)
    {
        axios.delete(`/api/houses/${id}`).then((response) =>
        {
        })
        this.props.deleteHouse(id);
    }
    render()
    {
        // console.log(this.props.houses);
        const houses = this.props.houses.map((curVal, index) =>
        {
            return <House key={index} 
            info={curVal} 
            method={(id) => this.handleDelete(id)}/>
        });
        return(
            <div>
                <Link to='/wizard/part1'><button>Add property</button></Link>
                {houses}
            </div>
        );
    }
}

function mapStateToProps(duxState)
{
    return(
        {
            houses: duxState.houses
        }
    );
}

const mapDispatchToProps = {
    deleteHouse, setHouses
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



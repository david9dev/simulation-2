import React, {Component} from 'react';
import House from './House/House'
import {connect} from 'react-redux';
import {setHouses, deleteHouse} from './../../../ducks/reducer';
import axios from 'axios';

class Dashboard extends Component
{
    componentDidMount()
    {
        let obj = {
            type: 'GET',
            payload: []
        };

        axios.get('/api/houses').then((response) =>
            {
            console.log(response.data);
            obj.payload = response.data;
            this.props.setHouses(obj);
            })
    }

    handleDelete(id)
    {
        axios.delete(`/api/houses/${id}`).then((response) =>
        {
            console.log(response.data);
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
    setHouses,
    deleteHouse
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



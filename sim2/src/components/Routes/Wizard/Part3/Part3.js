import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {add, handlePart3Input} from './../../../../ducks/reducer';
import {connect} from 'react-redux';
import axios from 'axios';

class Part3 extends Component
{
    constructor()
    {
        super();
        this.state= {
            monthlyMor: 0,
            desiredRent: 0
        }
    }

    componentDidMount()
    {
        this.setState(this.props.state)
    }
    handleAddHouse()
    {
    this.props.handlePart3Input(this.state);

    const {name, address, city, state, zip, imageurl, monthlyMor, desiredRent} = this.state;
    const house = {
        name,
        address,
        city,
        state,
        zip,
        image_url: imageurl,
        monthly_mor: monthlyMor,
        monthly_rent: desiredRent
    }

    axios.post('/api/houses', house).then((response) =>
    {
        console.log(response.data);
    })
    console.log(this.state);
    this.props.add(this.state);
    this.props.history.push('/');

    }

    handlMortgage(value)
    {
        this.setState({
            monthlyMor: value
        })
    }

    handlRent(value)
    {
        this.setState({
            desiredRent: value
        })
    }
    render()
    {
        return(
            <div>
                Part3
                <Link to='/wizard/part2'><button>Previous Step</button></Link>
                <input placeholder='Monthly Mortgage'
                onChange={(event) => this.handlMortgage(event.target.value)}/>
                <input placeholder='Desired Rent'
                onChange={(event) => this.handlRent(event.target.value)}/>
                <button
                onClick={() => this.handleAddHouse()}>Finish</button>
            </div>
        )
    }
}

function mapStateToProps(duxState)
{
    const {name, address, city, state, zip, imageurl, monthlyMor, desiredRent} = duxState;
    return{
        state: { name, address, city, state, zip, imageurl, monthlyMor, desiredRent}
    }
}

const mapDispatchToProps = {
    add,
    handlePart3Input
}
export default connect(mapStateToProps, mapDispatchToProps)(Part3);
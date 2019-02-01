import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handlePart1Input} from './../../../../ducks/reducer'

class Part1 extends Component
{
    constructor()
    {
        super();
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        }
    }
    componentDidMount()
    {
        this.setState(this.props.state);
    }

    handleName(value)
    {
        this.setState({
            name: value
        })
    }
    handleAddress(value)
    {
        this.setState({
            address: value
        })
    }
    handleCity(value)
    {
        this.setState({
            city: value
        })
    }
    handleState(value)
    {
        this.setState({
            state: value
        })
    }
    handleZip(value)
    {
        this.setState({
            zip: value
        })
    }

    handleNext()
    {

        this.props.handlePart1Input(this.state);
        this.props.history.push('/wizard/part2');
    }
    render()
    {
        // console.log(this.state);
        return(
            <div>
                Part1
                <input placeholder='name' value={this.state.name}
                onChange={(event) => this.handleName(event.target.value)}/>
                <input placeholder='address' value={this.state.address}
                onChange={(event) => this.handleAddress(event.target.value)}/>
                <input placeholder='city' value={this.state.city}
                onChange={(event) => this.handleCity(event.target.value)}/>
                <input placeholder='state' value={this.state.state}
                onChange={(event) => this.handleState(event.target.value)}/>
                <input placeholder='zip' value={this.state.zip}
                onChange={(event) => this.handleZip(event.target.value)}/>
                {/* <Link to='/wizard/part2'><button>Next</button></Link> */}
                <button
                onClick={() => this.handleNext()}>Next</button>
            </div>
        )
    }
}

function mapStateToProps(duxStore)
{
    const {name,
    address,
    city,
    state,
    zip} = duxStore;
    return {
        state: {
            name,
            address,
            city,
            state,
            zip
        }
    }
}
const mapDispatchToProps = {
    handlePart1Input
}
export default connect(mapStateToProps, mapDispatchToProps)(Part1);
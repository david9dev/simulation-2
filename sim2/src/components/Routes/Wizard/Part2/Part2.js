import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {handlePart2Input} from './../../../../ducks/reducer';

class Part2 extends Component
{
    constructor()
    {
        super();
        this.state = {
            imageurl: ""
        }
    }
    componentDidMount()
    {
        this.setState({
            imageurl: this.props.imageurl
        });
    }
    handleImageurl(value)
    {
        this.setState({
            imageurl: value
        });
    }
    handleNext()
    {
        this.props.handlePart2Input(this.state.imageurl);
        this.props.history.push('/wizard/part3');
    }
    render()
    {
        console.log(this.state);
        return(
            <div>
                Part2
                <Link to='/wizard/part1'><button>Previous Step</button></Link>
                <input placeholder='Image Url' value = {this.state.imageurl}
                onChange={(event) => this.handleImageurl(event.target.value)}/>
                <button
                onClick={() => this.handleNext()}>Next</button>
            </div>
        )
    }
}
function mapStateToProps(duxState)
{
    return{imageurl: duxState.imageurl};
}

const mapDispatchToProps = {
    handlePart2Input
}
export default connect(mapStateToProps, mapDispatchToProps)(Part2);
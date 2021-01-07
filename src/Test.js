import React, {Component} from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state= {
            number:0
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        const Test=Math.floor(Math.random()*12);
        this.setState({number:Test});
    }
    render(){
        return(
            <div>
            <h2> Number is: {this.state.number}</h2>
            <h3>{this.state.number==5? "win":null }</h3>
            <button onClick={ this.handleClick}>
            Click</button>
            </div>
        )
    }
}
export default Test;
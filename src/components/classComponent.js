import {Component} from 'react';

class ClassComponent extends Component {
    
    render() {
        return (
            <h1>This is another class component{this.props.name}</h1>
        );
    }
}

export default ClassComponent;
import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state ={
            pepe: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ pepe : users}));
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {pepe} = this.state;
        
        return !pepe.length ?
            <h1>Loading this shit...</h1> :
        (
        <div className='tc'>
            <h1 className='f1'>RoboZmrdi</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
            <ErrorBoundry>
            <CardList pepe={pepe} />
            </ErrorBoundry>
            </Scroll>
            
        </div>     
        );

    }
}
export default App;

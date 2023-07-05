import React from 'react'
import Menu from './Menu';
import {Jumbotron} from 'reactstrap'

export default class Header extends React.Component{
    render(){

        return(
            <div>
                {/* <div className="jumbotron text-center"
                    style={{'marginBottom':0}}> */}
                <Jumbotron className='text-center'
                        style={{'marginBottom':0}}>
                    <h1>Welcome to Reaction Tracker</h1>
                    <p>Trends are kind of our thing</p> 
                </Jumbotron>
                <Menu />
            </div>
        );
    }
}
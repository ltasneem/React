import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ReactionContainer from './ReactionContainer'
import {Route, Switch } from "react-router-dom";
import NewReactionForm from './NewReactionForm';
import ReactionDetail from './ReactionDetail'
import AppActions from '../actions/AppActions'

export default class UIRoot extends React.Component{

    componentWillMount() {
        AppActions.apiGetAll();
    }

    render(){

        return(
            <div>
                <Header />
                    <Switch>
                        <Route exact path="/" component={ReactionContainer} />
                        <Route path="/add" component={NewReactionForm} />
                        <Route path="/reactions/:id" component={ReactionDetail} />
                        <Route component={ReactionContainer} />
                    </Switch>
                <Footer />
            </div> 
        );
    }
}
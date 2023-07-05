import React from 'react'
import AppActions from '../actions/AppActions';

export default class NewReactionForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            question: "", 
            answer1: "", 
            answer2: "", 
            imageUrl: ""
        };
    }

    onAddReaction =  (e) => {
        e.preventDefault();
        //var list = this.state.reactionList;
        var reactionToAdd = {
          id: (new Date()).getTime(),
          question: this.state.question,
          answer1: this.state.answer1,
          answer2: this.state.answer2,
          imageUrl: this.state.imageUrl
        };
        AppActions.add(reactionToAdd);
        //list.push(reactionToAdd);
        // this.setState({
        //    reactionList: list 
        // });
        this.resetFormProperties();
    }

    resetFormProperties(){
        this.setState({
            question: "", 
            answer1: "", 
            answer2: "", 
            imageUrl: ""
        });
    }


    render(){

        return(
            <form className="col-lg-3 col-sm-6 border"
                onSubmit={this.onAddReaction}>
                <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <input type="text" className="form-control" 
                    id="question" value={this.state.question}
                    onChange={e=>this.setState({question: e.target.value})}/> 
                </div>
                <div className="form-group">
                    <label htmlFor="answer1">Answer 1:</label>
                    <input type="text" className="form-control" 
                    id="answer1" value={this.state.answer1}
                    onChange={e=>this.setState({answer1: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="answer2">Answer 2:</label>
                    <input type="text" className="form-control" 
                    id="answer2" value={this.state.answer2}
                    onChange={e=>this.setState({answer2: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" className="form-control" 
                    id="imageUrl" value={this.state.imageUrl}
                    onChange={e=>this.setState({imageUrl: e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>

        );
    }

}
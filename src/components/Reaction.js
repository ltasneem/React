import React from 'react'
import PropTypes from 'prop-types'
import AppActions from '../actions/AppActions';
import {Button, Col} from 'reactstrap'
import ReactionsStore from '../stores/ReactionsStore';
import {Link} from "react-router-dom";

export default class Reaction extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isActive:true
        };
    }

    incrementAnswer1() {
        // var currentAnswer1Count = this.state.answer1Count;
        // this.setState({answer1Count: currentAnswer1Count + 1});
        AppActions.addAnswer1Vote(this.props.id);
    }

    incrementAnswer2 = () => {
        // var currentAnswer2Count = this.state.answer2Count;
        // this.setState({answer2Count: currentAnswer2Count + 1});
        AppActions.addAnswer2Vote(this.props.id);
    }

    //Life cycle method
    componentDidMount() {
        this.interval = window.setInterval(this.tick, 100);
        this.setState({remainingMilliseconds: this.props.reactionSeconds});
    }

    //Life cycle method
    componentWillUnmount() {
        if (this.interval) {
            window.clearInterval(this.interval);
        }
    }

    shouldComponentUpdate(newProps) {
        if(this.state.remainingMilliseconds%1000 == 0)
            return true;
        else
            return false;
    }

    tick = () => {
        if (this.state.remainingMilliseconds > 0) {
            this.setState({remainingMilliseconds:
  
            this.state.remainingMilliseconds - 100});
  
        } else {
            window.clearInterval(this.interval);
            this.setState({isActive: false});
        }
      }

      onRemove = () => {
        AppActions.remove(this.props.id);
      }

    render(){
        let {id, imageUrl, question, answer1, answer2} = this.props;
        return(
            
            <Col lg="3" sm="6" className="border">
                <div>Remaining Time: {this.state.remainingMilliseconds}ms</div>
                <Button onClick={this.onRemove}>Remove</Button>
                <Link to={"/reactions/"+id}>Details</Link>
                <br />
                <img alt="" src={imageUrl} />
                <h3>{question}</h3>
                <Button onClick={this.incrementAnswer1.bind(this)}
                        disabled={!this.state.isActive}>
                    {answer1} ({ Math.round(100 * ReactionsStore.getAnswer1Count(id) / 
                        ( ReactionsStore.getAnswer1Count(id) + ReactionsStore.getAnswer2Count(id))) || 0 }%)
                </Button>
                <Button onClick={this.incrementAnswer2}
                        disabled={!this.state.isActive}>
                    {answer2} ({ Math.round(100 * ReactionsStore.getAnswer2Count(id) / 
                        ( ReactionsStore.getAnswer1Count(id) + ReactionsStore.getAnswer2Count(id))) || 0 }%)
                </Button>
            </Col>
        );
    }
}

Reaction.propTypes = {
    question: PropTypes.string.isRequired,
    answer1: PropTypes.any,
    answer2: PropTypes.any,
    imageUrl: PropTypes.string,
    reactionSeconds: PropTypes.number
}

Reaction.defaultProps = {
    question: "What is the answer to life?",
    answer1: "42",
    answer2: "NaN",
    imageUrl: "/assets/default-image.png",
    reactionSeconds: 100000
};
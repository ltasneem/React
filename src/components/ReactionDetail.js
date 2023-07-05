import React from 'react';
import {PieChart, Pie, Legend, Tooltip} from 'recharts'

import ReactionsStore from '../stores/ReactionsStore';

export default class ReactionDetail extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            reactionItem: ReactionsStore.getOne(Number(this.props.match.params.id)),
            name: ReactionsStore.getName()
        };
    }

    componentDidMount () {
        ReactionsStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        ReactionsStore.removeChangeListener(this.onChange);
    }

    onChange = () => {
        this.setState({
            reactionItem: ReactionsStore.getOne(this.props.params.id),
            name: ReactionsStore.getName()
        });
    }

    render() {
        let {id, imageUrl, question, answer1, answer2, 
            answer1Votes, answer2Votes} = this.state.reactionItem;
        const answerData = [
            {name: answer1, value: answer1Votes}, 
            {name: answer2, value: answer2Votes}];
        
        return (
            <div className="d-flex justify-content-center">
                <div>
                    <img alt="" src={imageUrl} />
                    <h3>{question}</h3>
                </div>
                <div>
                    <PieChart width={300} height={300}>
                    <Pie isAnimationActive={false} data={answerData} 
                         outerRadius={100} 
                        fill="#8884d8" label/>
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        );
    }

}
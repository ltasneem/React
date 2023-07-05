import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

 

let _reactionsList = [
    {id: 0, question: "Which dressing is tastier?", 
        answer1: "Ranch", answer2: "Vinaigrette",
        answer1Votes:0, answer2Votes:0},
    {id: 1, question: "Which has the better mane?", 
        answer1: "Lion", answer2: "Horse", 
        imageUrl:"/assets/lion.png",
        answer1Votes:0, answer2Votes:0},
    {id: 2, question: "Which is faster?", answer1: "Cheetah", 
        answer2: "Car", imageUrl:"/assets/cheetah.png",
        answer1Votes:0, answer2Votes:0},
    {id: 3, question: "Which bird has the heavier legs?", 
        answer1: "Turkey", answer2: "Ostrich", 
        imageUrl:"/assets/ostrich.png",
        answer1Votes:0, answer2Votes:0}
];

let _userName = "student!";

const CHANGE_EVENT = 'change';

class ReactionsStore extends EventEmitter{
    getAll() {
        return _reactionsList;
    }

    getOne(id){
        return _getOne(id);
    }

    getAnswer1Count(id){
        if(_getOne(id))
            return _getOne(id).answer1Votes;
        else
            return 0;
    }

    getAnswer2Count(id){
        if(_getOne(id))
            return _getOne(id).answer2Votes;
        else
            return 0;
    }
    
    getName() {
        return _userName;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}


function _add(reactionToAdd) {
    _reactionsList.push(reactionToAdd);
}

function _apiGetAllSuccess(data) {
    _reactionsList = data;
}

function _getOne(id) {

    let foundReaction = _reactionsList.find( (aReaction) => {
        return aReaction.id === id;
    });
    return foundReaction;
}

function _remove(id) {
    let index = _reactionsList.findIndex(function (item) {
        return item.id === id;
    });
    _reactionsList.splice(index, 1);
}

function _addAnswer1(id){
    let reaction = _getOne(id);
    reaction.answer1Votes += 1;
}

function _addAnswer2(id){
    let reaction = _getOne(id);
    reaction.answer2Votes += 1;
}

let store = new ReactionsStore();

export default store; 

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case AppConstants.REACTION_ADD:
            _add(action.data);
            store.emitChange();
            break;
        case AppConstants.REACTION_REMOVE:
            _remove(action.id);
            store.emitChange();
            break;
        case AppConstants.ADD_ANSWER_1:
            _addAnswer1(action.id)
            store.emitChange();
            break;
        case AppConstants.ADD_ANSWER_2:
            _addAnswer2(action.id)
            store.emitChange();
            break;
        case AppConstants.API_GETALL_SUCCESS:
        case AppConstants.API_ADD_SUCCESS:
        case AppConstants.API_REMOVE_SUCCESS:
            _apiGetAllSuccess(action.data);
            store.emitChange();
            break;
        default:    
    } 
 });
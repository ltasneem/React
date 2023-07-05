import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import fetch from 'isomorphic-fetch';


export default class AppActions{
    static add(reactionToAdd) {
        AppDispatcher.dispatch({
            actionType: AppConstants.API_ADD_START
        });
    
        fetch('http://localhost:5000/api/reactions', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            mode: 'cors',
            body: JSON.stringify(reactionToAdd)
        }).then(function (response) {
            return response.json(); })
        .then( (apiData) =>{
            AppDispatcher.dispatch({
                actionType: AppConstants.API_ADD_SUCCESS,
                data: apiData
            });
        });
    }

    static remove(id) {
        AppDispatcher.dispatch({
            actionType: AppConstants.API_REMOVE_START
        });
        fetch(`http://localhost:5000/api/reactions/${id}`, {
            method:"delete",
            mode:"cors"
        })
        .then(function (response) {
            return response.json(); })
         .then(function (apiData) {
               AppDispatcher.dispatch({
               actionType: AppConstants.API_REMOVE_SUCCESS,
               data: apiData
            });
         });
    }

    static addAnswer1Vote(id){
        AppDispatcher.dispatch({
            actionType: AppConstants.ADD_ANSWER_1,
            id: id
        });
    }

    static addAnswer2Vote(id){
        AppDispatcher.dispatch({
            actionType: AppConstants.ADD_ANSWER_2,
            id: id
        });
    }

    static apiGetAll() {
        AppDispatcher.dispatch({
            actionType: AppConstants.API_GETALL_START
        });
        fetch('http://localhost:5000/api/reactions', {
            method:"GET",
            mode:"cors"
        })
        .then(function (response) {
            return response.json(); })
         .then(function (apiData) {
               AppDispatcher.dispatch({
               actionType: AppConstants.API_GETALL_SUCCESS,
               data: apiData
            });
         });

    }
}

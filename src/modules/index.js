import { combineReducers } from 'redux';
import imageList from './imageList';
import requests from './request';

export default combineReducers({
    imageList: imageList,
    requests: requests
});
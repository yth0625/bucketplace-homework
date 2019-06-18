import { handleActions } from 'redux-actions';

import fetch from 'node-fetch';
import * as imageList from './imageList';

const imageServer = ' https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards';

const IMAGE_LODING_PENDING = 'user/IMAGE_LODING_PENDING';
const IMAGE_LODING_FULFILLE = 'request/IMAGE_LODING_FULFILLE';
const IMAGE_LODING_REJECTED = 'user/IMAGE_LODING_REJECTED';

export function imageLoding(page) {
    return async dispatch => {
        dispatch({type: IMAGE_LODING_PENDING});

        let response, data;
        try {
            response = await fetch(`${imageServer}/page_${page}.json`, {method:'GET'});
            if ( !response.ok )
                throw  new Error('failed_request');
            data = await response.json();

            if ( data.length === 0 ) {
                dispatch({
                    type: IMAGE_LODING_FULFILLE,
                    payload: 'end_page'
                });
            } else {
                dispatch(imageList.addImage(data));

                dispatch({
                    type: IMAGE_LODING_FULFILLE,
                    payload: 'fulfilled_request'
                });
            }
        } catch (err) {
            //이미지 요청 실패 시 
            dispatch({
                type: IMAGE_LODING_REJECTED,
                payload: err
            });
            return;
        }
    };
}

const initialState = {
    imageLoding: {
        status: 'not_started',
        error: null
    }
};

export default handleActions({
    [IMAGE_LODING_PENDING]: (state) => {
        state.imageLoding = { status : 'started', error : null };
        return state;
    },

    [IMAGE_LODING_FULFILLE]: (state, action) => {
        state.imageLoding = { status : action.payload, error : null };
        return state;
    },

    [IMAGE_LODING_REJECTED]: (state, action) => {
        state.imageLoding = { status : 'rejected', error : action.payload };
        return state;
    }
}, initialState);
import { handleActions, createAction } from 'redux-actions';

const ADDIMAGE = 'imagelist/ADDIMAGE';
const SCRAPIMAGE = 'imagelist/SCRAPIMAGE';
const INCREMENTIMAGERENDERCOUNT = 'imagelist/INCREMENTIMAGERENDERCOUNT';

export const addImage = createAction(ADDIMAGE);
export const scrapImage = createAction(SCRAPIMAGE);
export const incrementImageRenderCount = createAction(INCREMENTIMAGERENDERCOUNT);

const initialState = {
    imageList: [],
    imageRenderCount: 0,
    imageAppearNumber: 8
};

export default handleActions({
    [ADDIMAGE]: (state, action) => {
        const bufferState = Object.assign({}, state);
        const imageList = action.payload.map( image => {
            return {
                id: image.id,
                imageUrl: image.image_url,
                nickName: image.nickname,
                profileImageUrl: image.profile_image_url
            };
        });
        bufferState.imageList.push(...imageList);
        return bufferState;
    },
    [INCREMENTIMAGERENDERCOUNT]: (state) => {
        return {
            ...state,
            imageRenderCount: state.imageRenderCount + state.imageAppearNumber
        }
    },  
    
    [SCRAPIMAGE]: (state, action) => {
        return state;
    }
}, initialState);
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
            const iamgeObject = {
                id: image.id,
                imageUrl: image.image_url,
                nickName: image.nickname,
                profileImageUrl: image.profile_image_url,
                scrap: false
            };

            const localStorageData = JSON.parse(localStorage.getItem('imageList'));
            localStorageData.forEach(element => {
                if (iamgeObject.id === element)
                    iamgeObject.scrap = true;
            });
            
            return iamgeObject;
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
        const bufferState = Object.assign({}, state);
        bufferState.imageList = bufferState.imageList.map(image => {
            if ( image.id === action.payload ) {
                image.scrap = !image.scrap;

                const localStorageData = JSON.parse(localStorage.getItem('imageList'));

                if (image.scrap) {
                    localStorageData.push(image.id);
                    localStorage.setItem('imageList', JSON.stringify(localStorageData));
                } else {
                    localStorageData.splice(localStorageData.indexOf(image.id), 1);
                    localStorage.setItem('imageList', JSON.stringify(localStorageData));
                }
            }
            return image;
        });
        return bufferState;
    }
}, initialState);
import { handleActions, createAction } from 'redux-actions';

const ADDIMAGE = 'imagelist/ADDIMAGE';
const SCRAPIMAGE = 'imagelist/SCRAPIMAGE';

export const addImage = createAction(ADDIMAGE);
export const scrapImage = createAction(SCRAPIMAGE);

const initialState = [
    {
        id: 594037,
        imageUrl: 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640',
        nickName: '사용자 83',
        profileImageUrl: 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80'
    }
];

export default handleActions({
    [ADDIMAGE]: (state, action) => {
        return state;
    },
    
    [SCRAPIMAGE]: (state, action) => {
        return state;
    }
}, initialState);
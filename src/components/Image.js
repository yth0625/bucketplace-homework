import React from 'react';
import PropTypes from 'prop-types';

import onScrap from '../style/blue.svg';
import offScrap from '../style/on-img.svg';

import { toast } from 'react-toastify';


const Image = ({profileImageUrl, nickName, id, imageUrl, scrap, scrapImage}) => {
    const scrapButtonClick = (id) => {
        if (scrap)
            toast('스크랩 취소되었습니다.');
        else {
            const ToastElement  = () => (
                <div className='Toast'>
                    <div className='ToastImage' style = {{backgroundImage: `url(${imageUrl})`}}/>
                    <span className='ToastText'>스크랩 하였습니다</span>
                </div>
            );
            toast(<ToastElement/>)
        }
        scrapImage(id);
    }

    return (
        <div className = 'ImageComponent'>
            <div className = "ImageHeader">
                <img className ='ProfileImage' src={profileImageUrl} alt="profileImage"/> 
                <span className = 'NickName'>{nickName}</span>
            </div>
            <div className = 'PictureImage' style={{backgroundImage: `url(${imageUrl})`}}>
                <img 
                        onClick = {() => scrapButtonClick(id)}
                        className ='ScrapButton'
                        src={`${scrap  ? onScrap : offScrap}`}
                        alt= 'scrap'
                />
            </div>
        </div>
    );
};

Image.propTypes = {
    profileImageUrl: PropTypes.string.isRequired,
    nickName: PropTypes.string.isRequired,
    id : PropTypes.number.isRequired,
    imageUrl : PropTypes.string.isRequired
};


export default Image;
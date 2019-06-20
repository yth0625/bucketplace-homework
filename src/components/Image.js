import React from 'react';
import PropTypes from 'prop-types';

import onScrap from '../style/blue.svg';
import offScrap from '../style/on-img.svg';

const Image = ({profileImageUrl, nickName, id, imageUrl, scrap, scrapImage}) => {
    return (
        <div className = 'ImageComponent'>
            <div className = "ImageHeader">
                <img className ='ProfileImage' src={profileImageUrl} alt="profileImage"/> 
                <span className = 'NickName'>{nickName}</span>
            </div>
            <img className ='PictureImage' src={imageUrl} alt="pictureImage"/>
            <img 
                    onClick = {() => scrapImage(id)}
                    className ='ScrapButton'
                    src={`${scrap  ? onScrap : offScrap}`}
                    alt= 'scrap'
            />
            
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
import React from 'react';
import PropTypes from 'prop-types';

import onScrap from '../image/blue.svg';
import offScrap from '../image/on-img.svg';

const Image = ({profileImageUrl, nickName, id, imageUrl, scrap, scrapImage}) => {
    return (
        <div className = {'image' + id}>
            <img src={profileImageUrl} alt=""/> 
            {nickName}
            <img src={imageUrl} alt="" />
                <button onClick = {() => scrapImage(id)}>
                    <img 
                        src={`${scrap  ? onScrap : offScrap}`}
                        alt= 'scrap'
                />
                </button>
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
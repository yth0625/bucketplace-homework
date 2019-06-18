import React from 'react';
import PropTypes from 'prop-types';

const Image = ({profileImageUrl, nickName, id, imageUrl}) => {
    return (
        <div className = {'image' + id}>
            <img src={profileImageUrl} alt=""/> 
            {nickName}
            <img src={imageUrl} alt="" />
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
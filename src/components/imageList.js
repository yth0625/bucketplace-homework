import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

export default class ImageList extends React.PureComponent {
    static propTypes = {
        imageList: PropTypes.array.isRequired,
        requests: PropTypes.object.isRequired,
        addImage: PropTypes.func.isRequired,
        scrapImage: PropTypes.func.isRequired,
        imageLoding: PropTypes.func.isRequired  
    };
    
    constructor(props) {
        super(props);
    
        this.state = {
            pageNumber: 1
        };

        this.handleWheel = this.handleWheel.bind(this);
    }

    handleWheel(e) {
        if (e.target.getBoundingClientRect().bottom <= window.innerHeight) {
            this.props.imageLoding(this.state.pageNumber);
        }
    }

    render () {
        console.log(this.props.imageList);
        const imageList = this.props.imageList.map(
            
            (image) => {
                return (
                    <Image key = {image.id}
                        {...image}
                    />
                );
            }
        );

        return (
            <div
                className = "ImageList" onWheel = {this.handleWheel}
            >
                {imageList}
            </div>
        )
    }
}
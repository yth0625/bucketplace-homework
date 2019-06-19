import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

export default class ImageList extends React.PureComponent {
    static propTypes = {
        imageList: PropTypes.array.isRequired,
        imageRenderCount: PropTypes.number.isRequired,
        imageAppearNumber: PropTypes.number.isRequired,
        requests: PropTypes.object.isRequired,
        addImage: PropTypes.func.isRequired,
        scrapImage: PropTypes.func.isRequired,
        incrementImageRenderCount: PropTypes.func.isRequired,
        imageLoding: PropTypes.func.isRequired  
    };
    
    constructor(props) {
        super(props);
    
        this.state = {
            pageNumber: 1
        };

        this.props.imageLoding(this.state.pageNumber);
        this.handleWheel = this.handleWheel.bind(this);
    }

    handleWheel(e) {
        if (document.body.getBoundingClientRect().bottom <= window.innerHeight && e.deltaY > 0 ) {
            if ( this.props.imageRenderCount + this.props.imageAppearNumber > this.props.imageList.length ) {
                this.setState({pageNumber: this.state.pageNumber + 1}, () => {
                    this.props.imageLoding(this.state.pageNumber);
                });
            } else {
                this.props.incrementImageRenderCount();
            }
        }
    }

    render () {
        let imageList = [];
            for (let index = 0; index < this.props.imageRenderCount; index++) {
                const image = this.props.imageList[index];
                imageList.push(
                    <Image key = {image.id}
                        {...image}
                        scrapImage = {this.props.scrapImage}
                    />
                );
            }

        return (
            <div
                className = "ImageList" onWheel = {this.handleWheel}
            >
                {imageList}
            </div>
        )
    }
}
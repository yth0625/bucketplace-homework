import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

import viewAllImage from '../style/bt-checkbox-checked.svg';
import viewScrapImage from '../style/bt-checkbox-unchecked.png';

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
            pageNumber: 1,
            isScrap: false
        };

        this.props.imageLoding(this.state.pageNumber);
        this.handleWheel = this.handleWheel.bind(this);
        this.handleScrapCheckbox = this.handleScrapCheckbox.bind(this);
    }

    handleWheel(e) {
        const imageLodingStatus = this.props.requests.imageLoding.status;
        if (document.body.getBoundingClientRect().bottom <= window.innerHeight && e.deltaY > 0 &&
            imageLodingStatus !== 'end_page' && (imageLodingStatus === 'not_started' || imageLodingStatus === 'fulfilled')) {
            if ( this.props.imageRenderCount + this.props.imageAppearNumber > this.props.imageList.length ) {
                this.setState({pageNumber: this.state.pageNumber + 1}, () => {
                    this.props.imageLoding(this.state.pageNumber);
                });
            } else {
                this.props.incrementImageRenderCount();
            }
        }
    }

    handleScrapCheckbox() {
        this.setState({
            isScrap: !this.state.isScrap
        });
    }

    render () {
        const isScrapButton = 
            <div className ='IsScrapButton'>
                <img 
                    className = 'IsScrapButtonImage'
                    onClick = {() => this.handleScrapCheckbox()}
                    src={`${this.state.isScrap  ? viewAllImage : viewScrapImage}`}
                    alt= 'scrap'
                />
                <span className ='IsScrapButtonText'>스크랩한 것만 보기</span>
            </div>
        

        let imageList = [];
            for (let index = 0; index < this.props.imageRenderCount; index++) {
                const image = this.props.imageList[index];
                if (this.state.isScrap) {
                    if (image.scrap) {
                        imageList.push(
                            <Image key = {image.id}
                                {...image}
                                scrapImage = {this.props.scrapImage}
                            />
                        );
                    }
                } else {
                    imageList.push(
                        <Image key = {image.id}
                            {...image}
                            scrapImage = {this.props.scrapImage}
                        />
                    );
                }
            }

        return (
            <div className = "Main" onWheel = {this.handleWheel}>
                <div className = 'ImageScreen'>
                    {isScrapButton}
                    <div className = "ImageList">
                        {imageList}
                    </div>
                </div>
            </div>
        )
    }
}
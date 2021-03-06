import imageList from '../components/imageList';
import * as imageActions from '../modules/imageList';
import * as requestActions from '../modules/request';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    imageList: state.image.imageList,
    imageRenderCount: state.image.imageRenderCount,
    imageAppearNumber: state.image.imageAppearNumber,
    requests: state.requests
});

const mapDispatchProps = (dispatch) => ({
    addImage: (image) => dispatch(imageActions.addImage(image)),
    scrapImage: (imageId) => dispatch(imageActions.scrapImage(imageId)),
    incrementImageRenderCount: () => dispatch(imageActions.incrementImageRenderCount()),
    imageLoding: (pageNumber) => dispatch(requestActions.imageLoding(pageNumber))
});

const imageListContainer = connect(
    mapStateToProps,
    mapDispatchProps
)(imageList);

export default imageListContainer;
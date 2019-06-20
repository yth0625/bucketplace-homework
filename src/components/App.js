import React from 'react';

import ImageList from '../containers/imageListContainer.js';
import './App.css';

const App = () => {
    if (!localStorage.imageList) {
        localStorage.imageList = JSON.stringify([]);
    }
    return (
        <div className ='App'>
            <ImageList />
        </div>
    );
}; 


export default App;
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageList from '../containers/imageListContainer.js';
import './App.css';

const App = () => {
    if (!localStorage.imageList) {
        localStorage.imageList = JSON.stringify([]);
    }

    return (
        <div className ='App'>
            <ImageList />
            <ToastContainer position={toast.POSITION.BOTTOM_CENTER} autoClose={2000} hideProgressBar={true} />
        </div>
    );
}; 


export default App;
import './ImageList.css'
import React from 'react';

const ImageList = (props) => {

    const images = props.images.map(({ description, id, urls }) => {
        return (
            <div key={id}>
                <img src={urls.regular} alt={description} />
            </div>
        );
    });
    return (
        <div className="image-list">
            {images}
        </div>
    );
};

export default ImageList;
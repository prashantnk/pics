import React from 'react';

const ImageList = (props) => {

    const images = props.images.map(({ description, id, urls }) => {
        return (
            <li key={id}>
                <img src={urls.regular} alt={description} />
            </li>
        );
    });
    return (
        <ul>
            {images}
        </ul>
    );
};

export default ImageList;
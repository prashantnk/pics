import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.imageRef.current);
    }
    render() {
        const { description, urls } = this.props.image;
        return (
            <img alt={description} src={urls.regular} />
        );
    }
}

export default ImageCard;
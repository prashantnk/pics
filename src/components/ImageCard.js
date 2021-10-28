import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.setDimension = this.setDimension.bind(this);
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        // console.log(this.imageRef.current.clientHeight);
        // console.log(this.imageRef);
        this.imageRef.current.addEventListener('load', this.setDimension);
    }
    setDimension = function () {
        const imageHeight = this.imageRef.current.clientHeight;
        const spans = imageHeight + 10;
        this.setState({ spans });
    }
    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRow: `span ${this.state.spans}` }}>
                <img alt={description} src={urls.regular} ref={this.imageRef} />
            </div>
        );
    }
}

export default ImageCard;
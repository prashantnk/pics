import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };
    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit = async function (text) {
        const endPoint = "/search/photos";
        const options = {
            params: {
                query: text
            }
        };
        const response = await unsplash.get(endPoint, options);
        this.setState({ images: response.data.results });
    };
    render() {
        return (
            <h1 className="ui container" style={{ margin: "10px" }}>
                <SearchBar onFormSubmit={this.onFormSubmit} />
                Found : {this.state.images.length} images
                <ImageList images={this.state.images} />
            </h1>
        );
    }
}

export default App;
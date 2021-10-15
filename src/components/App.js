import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onFormSubmit = function (text) {
        console.log(text);
    };
    render() {
        return (
            <h1 className="ui container" style={{ margin: "10px" }}>
                <SearchBar onFormSubmit={this.onFormSubmit} />
            </h1>
        );
    }
}

export default App;
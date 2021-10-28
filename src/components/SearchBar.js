import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.formRef = React.createRef();
    }
    state = { term: '' };
    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    componentDidMount() {
        this.formRef.current.addEventListener('submit', this.onSubmitForm);
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" /*onSubmit={this.onSubmitForm}*/ ref={this.formRef}>
                    <div className="field">
                        <label htmlFor="searchInput" > Image Search </label>
                        <input type="text" className="ui input" id="searchInput"
                            value={this.state.term}
                            onChange={event => {
                                this.setState({ term: event.target.value });
                            }
                            }
                        />
                        <p>{this.state.term.length < 4 ? "Input should be of 4 characters" : ""}</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
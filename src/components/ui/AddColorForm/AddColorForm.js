import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddColorForm.css';

class AddColorForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            hexCode: "#000000",
        };
    }

    updateInput = stateKey => ({ target }) => {
        this.setState({
            [stateKey]: target.value,
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { title, hexCode } = this.state;
        this.props.addColor(title, hexCode);
    }

    render = () => (
        <form onSubmit={this.onSubmit}>
            <fieldset>
                <legend>Add a new color</legend>
                <div className="formElementsContainer">
                    <input type="text" placeholder="Color title"
                        onChange={this.updateInput('title')} />
                    <input type="color"
                        onChange={this.updateInput('hexCode')} />
                    <input type="submit" value="Add" />
                </div>
            </fieldset>
        </form>
    );
}

AddColorForm.propTypes = {
    addColor: PropTypes.func.isRequired,
};

export default AddColorForm;

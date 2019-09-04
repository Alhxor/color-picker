import React from 'react';
import PropTypes from 'prop-types';
import './AddColorForm.css';

class AddColorForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNewColor = props.onNewColor;
        this.state = {
            title: '',
            hexCode: '#000000',
        };
    }

    onChangeInput = stateKey => ({ target }) => {
        this.setState({
            [stateKey]: target.value,
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { title, hexCode } = this.state;
        this.onNewColor({ title, hexCode });
    }

    render = () => (
        <form onSubmit={this.onSubmit}>
            <fieldset>
                <legend>Add a new color</legend>
                <div className="formElementsContainer">
                    <input type="text" placeholder="Color title"
                        onChange={this.onChangeInput('title')} />
                    <input type="color" onChange={this.onChangeInput('hexCode')} />
                    <input type="submit" value="Add" />
                </div>
            </fieldset>
        </form>
    );
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func.isRequired,
};

export default AddColorForm;

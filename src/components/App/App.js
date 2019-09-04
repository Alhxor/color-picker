import React from 'react';
import './App.css';
import ColorList from '../ColorList/ColorList';
import AddColorForm from '../AddColorForm/AddColorForm';
import mockData from '../../data/mock.js';
import v4 from 'shortid';

class App extends React.Component {
    constructor() {
        super();
        const { colors } = mockData;
        this.state = {
            colors: colors.map(color => ({
                ...color,
                id: v4(),
            })),
        };
    }

    addColor = ({ title, hexCode, rating=0 }) => {
        this.setState({
            colors: [
                ...this.state.colors,
                {name: title, hexCode: hexCode, rating: rating}
            ]
        });
    }

    setColorRating = id => rating => {
        const colors = this.state.colors.map(
            color =>
                (color.id === id) ?
                    { ...color, rating: rating } :
                    color
        );
        this.setState({ colors: colors });
    }

    render = () => {
        return (
            <div className="App">
                <header>
                    <h1>Color picker</h1>
                </header>
                <main>
                    <AddColorForm onNewColor={this.addColor} />
                    <ColorList
                        colors={this.state.colors}
                        onColorRatingChange={this.setColorRating}
                    />
                </main>
                <footer>
                    <p>
                        Practice exercise, inspired by "Learning React: Functional Web Development with React and Redux"
                    </p>
                </footer>
            </div>
        );
    }
}

export default App;

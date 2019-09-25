import React from 'react';
import './MainLayout.css';

const MainLayout = ({ children }) => (
    <div className="App">
        <header>
            <h1>Color picker</h1>
        </header>
        <main>
            { children }
        </main>
        <footer>
            <p>
                Practice exercise, inspired by "Learning React: Functional Web Development with React and Redux"
            </p>
        </footer>
    </div>
);

export default MainLayout;

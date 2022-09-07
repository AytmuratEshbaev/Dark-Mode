import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: false
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(event) {
        this.setState({ darkMode: event.target.checked });
    }
    render() {
        return (
            <div className="cardWrapper">
                <div className={"card" + (this.state.darkMode ? " dark" : " white")}>
                    <h2 className="card__title">Render Props!</h2>
                    <p className="card__text">I was build with a two class components. A wrapper that handles state and state changing functions and a child that uses that functionality.</p>
                    <label htmlFor="darkMode">
                        <input type="checkbox" id="darkMode" onInput={this.handleInput} />Dark Mode 1
                    </label>
                </div>
            </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);

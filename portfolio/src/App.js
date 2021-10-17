import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component {
    state =  { displayBio: false}; // Define values outside of constructor

    toggleDisplayBio = () => { // Refactor in this style
        this.setState({displayBio: !this.state.displayBio}) // This is how to toggle a state
    }
    render() { // This is an exception as it is fundamental method
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Daksh. I'm a young mathematician and scientist.</p>
                <p>I like working on projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Waterloo and code almost every day.</p>
                            <p>My favourite language is Python and I think React.js is awesome.</p>
                            <p>Besides coding, I also love music and sushi!</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>)
                }
                <hr />
                <Projects />
                <hr />
            </div>
        )
    }
}

export default App;

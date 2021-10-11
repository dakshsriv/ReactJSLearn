import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super(); // This is how to get methods and vars from superclasses
        this.state =  { displayBio: false }; // This is how to define a state

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this) // This is how to bind the this to a helper function
    }

//    showLess() {
//        this.setState({displayBio:false}) This is how to modify the state properly
//    }

    toggleDisplayBio() {
        this.setState({displayBio: !this.state.displayBio}) // This is how to toggle a state
    }
    render() {
      
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
            </div>
        )
    }
}

export default App;

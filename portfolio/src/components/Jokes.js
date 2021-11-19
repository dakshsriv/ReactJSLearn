import React, { Component } from 'react';

const uuidv4 = require("uuid/v4");

const Joke = props => {
    const{ category, type, setup, delivery, flags, id, safe, lang} = props.jokeInstance;
    return (
    <div>
        <p>{setup} <em>{delivery}</em> </p>
    </div>
    )
}

class Jokes extends Component {
    state = { jokes: {}, joke: {}, showJoke: false };

    toggleDisplayTenJokes = () => { // Refactor in this style
        this.setState({showJoke: !this.state.showJoke}) // This is how to toggle a state
    }

    componentDidMount() {
        fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart&amount=10")
        .then(response => response.json())
        .then(json => { 
            this.setState({ jokes: json})
        })
        .catch(error => alert(error.message)); 

        fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart&amount=1")
        .then(response => response.json())
        .then(json => { 
            this.setState({ joke: json})
        })
        .catch(error => alert(error.message)); 

    }

    render() {
        const {category, type, setup, delivery, flags, safe, id, lang} = this.state.joke
        //const randomJokes = this.state.jokes.jokes.map((j) => j.setup
        const jokesRender = this.state.jokes.jokes;

        return (
            <div>
                <h2>Highlighted Joke</h2>
                <p>{setup} <em>{delivery}</em></p>
                <hr/>
                <h2>Want ten new jokes?</h2>
                {this.state.showJoke ? (<span>{(jokesRender || []).map(joke => (<Joke jokeInstance={joke} key={uuidv4()
} /> )) } <button onClick={this.toggleDisplayTenJokes}>Want only 1?</button></span>) : <button onClick={this.toggleDisplayTenJokes}>Click me!</button> }
                
            </div>
        )
    } 
}


export default Jokes
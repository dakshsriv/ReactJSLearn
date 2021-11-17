import React, { Component } from 'react';

class Jokes extends Component {
    state = { joke: {} };

    componentDidMount() {
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart").then(response => console.log('response', response));
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Jokes
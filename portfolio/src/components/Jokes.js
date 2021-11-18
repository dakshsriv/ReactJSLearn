import React, { Component } from 'react';


const addToDict = (info) => {
    const{ category, type, setup, delivery, flags, id, safe, lang} = {info};
    jokesDict.push({key: {setup}, value: {delivery}})
}


class Jokes extends Component {
    state = { jokesl: {}, jokesDict: {} };

    componentDidMount() {
        /* fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart").then(response => response.json())
        .then(json => this.setState({ joke: json})); */
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10").then(response => response.json())
        .then(json => this.setState({jokesl: json}));

    }

    render() {
        const{error, amount, jokes} = this.state.jokesl
        var svar = jokes.map(joke => (<addToDict info={joke} />));
    }
    /*
    render() {
        const {error, category, type, setup, delivery, flags, id, safe, lang} = this.state.joke

        return (
            <div>
                <h2>Highlighted Joke</h2>
                <p>{setup} <em>{delivery}</em></p>
            </div>
        )
    } */
}

export default Jokes
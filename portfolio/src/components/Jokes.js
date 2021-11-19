import React, { Component } from 'react';

const Joke = props => {
    const{ category, type, setup, delivery, flags, id, safe, lang} = props.jokeInstance;
    return (
    <div>
        <p>{setup} <em>{delivery}</em> </p>
    </div>
    )
}

class Jokes extends Component {
    state = { jokes: {} };

    componentDidMount() {
        fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart&amount=10")
        .then(response => response.json())
        .then(json => { 
            console.log( json.amount)
            console.log( json.jokes)
            this.setState({ jokes: json})
        }); 

    }

    render() {
        // const {category, type, setup, delivery, flags, safe, id, lang} = this.state.jokes.jokes
        //const randomJokes = this.state.jokes.jokes.map((j) => j.setup
        const jokesRender = this.state.jokes.jokes;
        console.log(jokesRender);

        return (
            <div>
                <h2>Highlighted Jokes</h2>
                <span>{(jokesRender || []).map(joke => (<Joke jokeInstance={joke} />)) }</span>
            </div>
        )
    } 
}


export default Jokes
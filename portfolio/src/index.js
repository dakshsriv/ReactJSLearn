import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); 

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log('I am', this.name, 'and I am', this.age, 'years old')
    }
}

const animal1 = new Animal('Simba', 3)
animal1.speak()
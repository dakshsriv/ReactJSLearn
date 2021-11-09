import React, { Component} from 'react'

const TITLES = [
    'a software developer',
    'a music lover',
    'an enthusiastic learner',
    'an adventure seeker'
]

class Title extends Component {
    state = { titleIndex: 0};
    // all vars go to the 'this' variable

    componentDidMount() {
        
    }
    render() {
        const title = TITLES[this.state.titleIndex];

        return(<p>I am {title}</p>)
    }
    
}

export default Title;
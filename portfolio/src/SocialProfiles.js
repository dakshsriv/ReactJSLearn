import React, { Component } from 'react';
import SOCIAL_PROFILES from 'data/socialProfiles';

class Profile extends Component {
    render() {
        console.log('this.props', this.props);

        const { title, image, description, link} = this.props.project; // Javascript destruction
        
        return (
            <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
                <h3>{title}</h3>
                <img src={image} alt='profile' style={{ width: 200, height: 120}} />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Profiles extends Component {
    render () {
        return (
            <div>
                <h2>Highlighted Profiles</h2>
                <div>
                    {
                        SOCIAL_PROFILESS.map(SOCIAL_PROFILES => {
                            return (
                                <Profile key={SOCIAL_PROFILES.id} project={SOCIAL_PROFILES}/>
                                // <div key={SOCIAL_PROFILES.id}>{SOCIAL_PROFILES.title}</div>  Use key={SOCIAL_PROFILES.id} to help React distinguish this
                            )
                        }) // Use this to scalably map data
                    }
                </div>
            </div>
        )
    }
}

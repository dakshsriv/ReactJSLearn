import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        console.log('this.props', this.props);

        const { link, image} = this.props.project; // Javascript destruction
        
        return (
            <div style={{ display: 'inline-block', width: 60, margin: 10 }}>
                <a href={link}><img src={image} alt='profile' style={{ width: 35, height: 35}} /></a>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render () {
        return (
            <div>
                <h2>Social Profiles</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return (
                                <SocialProfile key={SOCIAL_PROFILE.id} project={SOCIAL_PROFILE}/>
                                // <div key={SOCIAL_PROFILE.id}>{SOCIAL_PROFILE.title}</div>  Use key={SOCIAL_PROFILE.id} to help React distinguish this
                            )
                        }) // Use this to scalably map data
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;
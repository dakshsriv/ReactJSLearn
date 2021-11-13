import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const { link, image} = props.project; // Javascript destruction
    
    return (
        <div style={{ display: 'inline-block', width: 60, margin: 10 }}>
            <a href={link}><img src={image} alt='profile' style={{ width: 35, height: 35}} /></a>
        </div>
    )
}

const SocialProfiles = () => (
    <div>
        <h2>Social Profiles</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
                        <SocialProfile key={SOCIAL_PROFILE.id} project={SOCIAL_PROFILE}/>
                )) // Use this to scalably map data
            }
        </div>
    </div>
)

export default SocialProfiles;
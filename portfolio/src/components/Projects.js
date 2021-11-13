import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
    const { title, image, description, link} = props.project; // Javascript destruction
    
    return (
        <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{ width: 200, height: 120}} />
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    ) // Make the project a function and remove the render
}

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                        <Project key={PROJECT.id} project={PROJECT}/>
                        // <div key={PROJECT.id}>{PROJECT.title}</div>  Use key={PROJECT.id} to help React distinguish this
                    )
                ) // Use this to scalably map data
            }
        </div>
    </div>
) // Inline return

export default Projects;
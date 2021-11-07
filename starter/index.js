import React from 'react';
import ReactDOM from 'react-dom';

const elementOld = React.createElement('div', null, 'React element!'); // This line is a more verbose way of making an object
const element = <div>React element with JSX!</div> // This must be transformed, use npm init to binitialize js project. use npm i 'package' to install a package

// Also, the React auto-comes from the imports in HTML
ReactDOM.render(element, document.getElementById('root')); // Renders an element, and document is a very powerful object. But it is bad because document.body direct accessing is dangerous. So, getElementById is used.


// Use npm i react@x.x.x and npm i react-dom@x.x.x to install pkgs
// in package.json, make a start script with 'parcel <html file>'
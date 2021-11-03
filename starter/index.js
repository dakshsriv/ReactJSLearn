console.log('hi');
const element = React.createElement('div', null, 'React element!'); // This line is a more verbose way of making an object
// Also, the React auto-comes from the imports in HTML
ReactDOM.render(element, document.getElementById('root')); // Renders an element, and document is a very powerful object. But it is bad because document.body direct accessing is dangerous. So, getElementById is used.

import React from 'react';
import ReactDOM from 'react-dom';

// Create new Component
// some HTML
const App = function(){
    return <div>Hi</div>;
}

// Take this component's generate HTML and put is
// on the page (in the Dom) 
ReactDOM.render(<App />, document.querySelector('.container'));
import React from 'react';
import ReactDOM from 'react-dom';

// creating component that creates HTML

 const App = () => {
     return <div>hi!</div>;
 }

// take the componemnts and put it on the page
// (put it in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));


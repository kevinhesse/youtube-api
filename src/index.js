import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAbjEnlotS8yx3aKjFH7hR-9rfbgEbubuM';

// creating component that creates HTML

 const App = () => {
     return(  
     <div>
         <SearchBar />
     </div>
     )
 }

// take the componemnts and put it on the page
// (put it in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));


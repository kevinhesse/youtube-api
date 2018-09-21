import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';


const API_KEY = config.YOUTUBE_API_KEY;

YTSearch ({key: API_KEY, term: "surfboards"}, (data => {
    console.log(data)
}))




// creating component that creates HTML

 class App extends Component {
     constructor(props) {
         super(props);

         this.state = { videos: [] };
     }
     render () {
     return(  
     <div>
         <SearchBar />
     </div>
     );
    }
 }



// take the componemnts and put it on the page
// (put it in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));


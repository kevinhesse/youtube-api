import React, { Component } from 'react';

//creates a class and extends says give functionality of
// the funtionality the react.componenet class has
//every class we create need to be deifined by a render method

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ' ' }
  }

  render() {
    return <input onChange={(event) => console.log(event.target.value) } />;
}

}
//super calls parent method Component "automatically"
//() on event can be dropped when only a single argument
//using es6 we added arrow function above to eliminate this code
//   onInputChange(event) {
//     console.log(event.target.value)

//   }


//changing functonal component below into a class based component
// const SearchBar = () => {
//     return <input />;
// };

export default SearchBar;





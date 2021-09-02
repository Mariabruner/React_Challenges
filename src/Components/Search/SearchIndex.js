import React from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends React.Component {
  constructor(){
  super()
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     searchResults: []
   }
  }

  searchFunction(event) {
    event.preventDefault()

    this.setState({ searchResults: this.state.things.filter(thing => thing === event.target.value)})
  }
 
  render() {
    let display
    if (this.state.searchResults.length === 0){
      display = this.state.things
    } else {
      display = this.state.searchResults
    }

    return(
      <div>
        <Input placeholder='Search Here' onChange={(event) => this.searchFunction(event)} />
        <h3>Results:</h3>
        <p>{display.map(item => <li>{item}</li>)}</p>
      </div>
    )} 
 }

 
export default SearchIndex;

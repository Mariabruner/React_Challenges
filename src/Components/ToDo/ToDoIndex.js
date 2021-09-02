import React from 'react'

class ToDoList extends React.Component {
    constructor() {
        super()
        this.state = {
            ToDoItems: [],
            newItem: {},
        }
    }

    saveItem = (e) => {
        this.setState({ newItem: e.target.value })
        console.log(this.state.newItem)
    }

    addItem = (e) => {
        e.preventDefault()
        this.state.ToDoItems.push(this.state.newItem)
        this.setState({ ToDoItems: this.state.ToDoItems })

        console.log(this.state.ToDoItems)
    }
  
    removeItem = (e) => {
       e.preventDefault()
       
    }

    render() {
        let displayList = this.state.ToDoItems.map(item => <><li key={item.index} value={item.value}>{item}</li> <button key={item.index} onClick={this.removeItem}>Cross off of list</button> <br /><br /></>)
        return (
            <form>
                <p> Add to your To Do List! </p>
                    <input type="text" onChange={this.saveItem}/>
                <input type="submit" value="Submit" onClick={this.addItem}/>
                <p>
                    {displayList}
                </p>
            </form>
        )
    }
}

export default ToDoList
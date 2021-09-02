import React from 'react'

export default class Dogs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: ''
        }
    }

    fetch_function = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data =>
                this.setState({ image: data.message })
            )
    }

    render() {
        return (
            <div>
            <button onClick={this.fetch_function}> Another picture! </button>
            <br />
            <img alt="dog" src={this.state.image} />
            </div>
        )
    }
}


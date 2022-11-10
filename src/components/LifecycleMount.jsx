import React from 'react'

export default class LifecycleMount extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: 'Esse texto vai mudar em 3 segundos'
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({text: "Component did mount"})
    }, 3000)
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}
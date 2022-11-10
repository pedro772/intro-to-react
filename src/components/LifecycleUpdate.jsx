import React from 'react'

export default class LifecycleUpdate extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'O estado vai atualizar'
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({name: "O estado foi atualizado"})
    }, 3000)
  }

  componentDidUpdate(prevState){
    if(prevState.name !== this.state.name){
      document.getElementById('statechange').innerHTML = "Sim, o estado atualizou"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3 id="statechange"></h3>
      </div>
    )
  }
}
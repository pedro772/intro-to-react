import React from 'react'

export default class LifecycleUnmount extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        show: true,
      } 
  }

  render() {
    return (
      <>
        <p>{this.state.show ? <Child/> : null}</p>
        {
          this.state.show ?
          <button onClick={() => {this.setState({show: !this.state.show})}}>
            Clica aqui pro componente filho sumir
          </button>
          :
          <button onClick={() => {this.setState({show: !this.state.show})}}>
            Clica aqui pro componente filho aparecer
          </button>
        }
      </>
    )
  }
}

export class Child extends React.Component {
  componentWillUnmount() {
    alert('Esse componente vai sair do DOM')
  }

  render() {
    return <h3>Eu sou um componente filho</h3>
  }
}
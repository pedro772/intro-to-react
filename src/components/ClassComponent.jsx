import React from 'react'

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>Olá {this.props.name}</h1>
    )
  }
}
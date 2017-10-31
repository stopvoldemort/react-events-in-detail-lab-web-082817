// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends React.Component {

  clickHandler(ev) {
    const x = ev.clientX
    const y = ev.clientY
    this.props.onReceiveCoordinates([x,y])
  }

  render() {
    return (
      <button onClick={this.clickHandler.bind(this)} />
    )
  }
}

export default CoordinatesButton

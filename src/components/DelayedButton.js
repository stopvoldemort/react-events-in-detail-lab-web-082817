// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends React.Component {

  handleClick(ev) {
    ev.persist()
    setTimeout(
      () => this.props.onDelayedClick(ev),
      this.props.delay
    )
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)} />
    )
  }
}

export default DelayedButton

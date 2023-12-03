import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex justify-content-center">
        <img src={loading} alt="loading" />
        </div>
      </div>
    )
  }
}

export default Spinner

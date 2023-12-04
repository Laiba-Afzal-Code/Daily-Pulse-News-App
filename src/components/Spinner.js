import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="container my-4 d-flex justify-content-center">
        <img src={loading} alt="loading" style={{width: '70px'}}/>
        </div>
      </div>
    )
  }
}

export default Spinner

import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => <Band key={band.id} id={band.id} delete={this.props.delete} band={band}/>)
  }

  render() {
    return (
      <div>BAND CONTAINER
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: bandId => {dispatch({type: "DELETE_BAND", payload: bandId})}
})



export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
  renderBands(){
    console.log(this.props.bands)
    return this.props.bands.map(band => <Band key ={band.id} id ={band.id} delete = {this.props.deleteBand} name = {band.text}/>)
  }

  handleDelete = (bandName) =>{
    console.log(bandName)
  }


}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type:"DELETE_BAND", payload:id} )
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

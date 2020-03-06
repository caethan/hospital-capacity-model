import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'

export default class Controls extends Component {
  constructor() {
    /* 1. Initialize Ref */
    super(); 
    this.lengthOfStay = React.createRef();
    this.infectionRate = React.createRef();
    this.hospitalRate = React.createRef();
    this.icuRate = React.createRef();
    this.fatalityRate = React.createRef();
 }

 handleLengthOfStayChange() {
    const value = this.lengthOfStay.current.value
    this.props.updateLengthOfStay(value)
 }

 handleInfectionRateChange() {
  const value = this.infectionRate.current.value
  this.props.updateInfectionRate(value)
}

 handleHospitalRateChange() {
  const value = this.hospitalRate.current.value
  this.props.updateHospitalRate(value)
}

handleIcuRateChange() {
  const value = this.icuRate.current.value
  this.props.updateIcuRate(value)
}

handleFatalityRateChange() {
  const value = this.fatalityRate.current.value
  this.props.updateFatalityRate(value)
}

 render() {   
    return (
      <div style={{ paddingTop: '2rem' }}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">Length of stay</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.lengthOfStay}
            onChange={() => this.handleLengthOfStayChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text>%</InputGroup.Text>
            <InputGroup.Text id="inputGroup-sizing-default">Infection rate</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.infectionRate}
            onChange={() => this.handleInfectionRateChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text>%</InputGroup.Text>
            <InputGroup.Text id="inputGroup-sizing-default">Hospitalization rate</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.hospitalRate}
            onChange={() => this.handleIcuRateChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text>%</InputGroup.Text>
            <InputGroup.Text id="inputGroup-sizing-default">ICU rate</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.icuRate}
            onChange={() => this.handleLengthOfStayChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text>%</InputGroup.Text>
            <InputGroup.Text id="inputGroup-sizing-default">Case fatality rate</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.fatalityRate}
            onChange={() => this.handleFatalityRateChange()}  
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </div>
    );
  }
}

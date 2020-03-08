import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import Defaults from './Defaults.js'

export default class Controls extends Component {
  constructor() {
    /* 1. Initialize Ref */
    super(); 
    this.daysInfected = React.createRef();
    this.infectionRate = React.createRef();
    this.fractionCritical = React.createRef();
    this.fractionDeadIcu = React.createRef();
    this.fractionDeadHospital = React.createRef();
    this.fractionDeadHome = React.createRef();
 }

 handleDaysInfectedChange() {
    const value = Number(this.daysInfected.current.value)
    this.props.updateDaysInfected(value)
 }

 handleInfectionRateChange() {
  const value = Number(this.infectionRate.current.value)
  this.props.updateInfectionRate(value)
}

 handleFractionCriticalChange() {
  const value = Number(this.fractionCritical.current.value)
  this.props.updateFractionCritical(value)
}

handleFractionDeadIcuChange() {
  const value = Number(this.fractionDeadIcu.current.value)
  this.props.updateFractionDeadIcu(value)
}

handleFractionDeadHospitalChange() {
  const value = Number(this.fractionDeadHospital.current.value)
  this.props.updateFractionDeadHospital(value)
}

handleFractionDeadHomeChange() {
  const value = Number(this.fractionDeadHome.current.value)
  this.props.updateFractionDeadHome(value)
}

 render() {   
    return (
      <div style={{ width: '30rem' }}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Days</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.daysInfected}
            defaultValue={Defaults.daysInfected}
            onChange={() => this.handleDaysInfectedChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroup-sizing-default">Infected before recovery or death</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            ref={this.infectionRate}
            defaultValue={Defaults.infectionRate}
            onChange={() => this.handleInfectionRateChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroup-sizing-default">New infections produced by each infectious person (R0)</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text>Fraction</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.fractionCritical}
            defaultValue={Defaults.fractionCritical}
            onChange={() => this.handleFractionCriticalChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroup-sizing-default">Infections needing critical care</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Fraction</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.fractionDeadIcu}
            defaultValue={Defaults.fractionDeadIcu}
            onChange={() => this.handleFractionDeadIcuChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroup-sizing-default">Critical cases dying with ICU care</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Fraction</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.fractionDeadHospital}
            defaultValue={Defaults.fractionDeadHospital}
            onChange={() => this.handleFractionDeadHospitalChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroup-sizing-default">Critical cases dying with hospital care</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Fraction</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            ref={this.fractionDeadHome}
            defaultValue={Defaults.fractionDeadHome}
            onChange={() => this.handleFractionDeadHomeChange()}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <InputGroup.Text id="inputGroup-sizing-default">Critical cases dying with home care</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

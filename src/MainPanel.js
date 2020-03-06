import React, { PureComponent } from 'react';
import { Card, Figure } from 'react-bootstrap'
import Chart from './Chart.js'
import Controls from './Controls.js'

export default class MainPanel extends PureComponent {
  render() {
    return (
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Hospital Capacity</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Figure><Chart /></Figure>
          <Controls />
        </Card.Body>
      </Card>
    );
  }
}
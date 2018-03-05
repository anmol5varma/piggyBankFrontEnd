import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

class Container extends React.Component {
  render() {
    const dummySentences = [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Donec hendrerit tempor tellus.',
      'Donec pretium posuere tellus.',
      'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      'Nulla posuere.',
      'Donec vitae dolor.',
      'Nullam tristique diam non turpis.',
      'Cras placerat accumsan nulla.',
      'Nullam rutrum.',
      'Nam vestibulum accumsan nisl.',
    ];

    const gridInstance = (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
            <br />
            {dummySentences.slice(0, 6).join(' ')}
          </Col>
          <Col sm={6} md={3}>
            <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
            <br />
            {dummySentences.slice(0, 4).join(' ')}
          </Col>
          <Col sm={6} md={3}>
            <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
            <br />
            {dummySentences.slice(0, 6).join(' ')}
          </Col>
          <Col sm={6} md={3}>
            <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
            <br />
            {dummySentences.slice(0, 2).join(' ')}
          </Col>
        </Row>
      </Grid>
    );

    const tableInstance = (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
    // return (gridInstance);
    return (tableInstance);
  }
}

export default Container;

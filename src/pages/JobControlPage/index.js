import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class App extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="Hello JobControlPage"
          subtitle="Subtitle"
        />
      </Card>
    )
  }
}

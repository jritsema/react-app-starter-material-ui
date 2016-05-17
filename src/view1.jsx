import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class View1 extends React.Component {

  render () {
    return (
      <div>
        <br />
        <Card initiallyExpanded={true}>
          <CardHeader
            title="View 1"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expanable={true}>
            This is View 1.
          </CardText>
          <CardActions expandable={true}>
            <RaisedButton label="Action1" primary={true} />
            <RaisedButton label="Action2" secondary={true} />
          </CardActions>
        </Card>
      </div>
    );
  }

}

export default View1;

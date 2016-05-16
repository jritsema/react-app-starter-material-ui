import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import {teal500, indigo500, blue500, deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
//import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    accent1Color: teal500,
  },
});

class App extends React.Component {

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="react-app-starter-material-ui"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <br/>
          <RaisedButton label="Default" />
          <br/>
          <RaisedButton label="Primary" primary={true} />
          <br/>
          <RaisedButton label="Secondary" secondary={true} />
          <br/><br/><br/>
          <FlatButton label="Default" />
          <br/>
          <FlatButton label="Primary" primary={true} />
          <br/>
          <FlatButton label="Secondary" secondary={true} />
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;

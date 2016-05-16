import React from 'react'
import AppBar from 'material-ui/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {teal500, indigo500, blue500, deepOrange500} from 'material-ui/styles/colors'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import { withRouter } from 'react-router'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    accent1Color: teal500,
  },
});

class App extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.handleChangeSingle = this.handleChangeSingle.bind(this);

    this.state = {
      valueSingle: 'view1'
    };
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="react-app-starter-material-ui"
            showMenuIconButton={false}
            iconElementRight={
              <IconMenu
                iconButtonElement={<IconButton><MenuIcon/></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onItemTouchTap={this.onClick}
                onChange={this.handleChangeSingle}
                value={this.state.valueSingle}
              >
                <MenuItem value="view1" primaryText="View 1" />
                <MenuItem value="view2" primaryText="View 2" />
              </IconMenu>
            }
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }

  onClick(event, child) {
    this.props.router.push(child.props.value);
  }

  handleChangeSingle(event, value) {
    this.setState({ valueSingle: value });
  }

}

export default withRouter(App);

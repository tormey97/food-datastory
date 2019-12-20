import React from 'react';
import 'typeface-roboto';
import Menu from "./components/Menu";
import DataStory from "./components/DataStory";
import Introduction from "./components/Introduction";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import useStyles from "./styles/main"
import secondaryColor from '@material-ui/core/colors/green';
import primaryColor from '@material-ui/core/colors/indigo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Search from "./components/Search";
import classNames from "classnames";
import Divider from "@material-ui/core/Divider/Divider";

const theme = createMuiTheme({
    palette: {
        primary: primaryColor,
        secondary: secondaryColor,
    },
});
function handleUpdate() {
    let {
      action
    } = this.state.location;
  
    if (action === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

function App() {
    const classes = useStyles();
    return (
    <Router forceRefresh>
        <MuiThemeProvider theme={theme}>
            <Menu/>
            <Switch>
                <Route component={ScrollToTop} path={process.env.PUBLIC_URL + "/search"}>
                    <Search/>
                </Route>
                <Route component={ScrollToTop} path={process.env.PUBLIC_URL + "/dataStory"}>
                    <DataStory/>
                </Route>
                <Route component={ScrollToTop} path={process.env.PUBLIC_URL + "/"}>
                    <Introduction/>
                </Route>
            </Switch>
            <Divider/>
            <div className={classNames(classes.section, classes.footer)}>
                <b>Authors:</b>
                <br/>
                Davide Nanni, Torstein Meyer, Fernando Monje and Carlos Villa.
            </div>
        </MuiThemeProvider>
    </Router>
    );
}

export default App;

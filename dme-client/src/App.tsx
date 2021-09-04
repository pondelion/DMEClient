import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MemoryEdit from './pages/MemoryEdit';
import ServerSettings  from './pages/ServerSettings';
import { darkTheme } from './theme/MaterialUI';


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={darkTheme}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" component={MemoryEdit} exact />
            <Route path="/memory_edit" component={MemoryEdit} exact />
            <Route path="/server_setting" component={ServerSettings} exact />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;

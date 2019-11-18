import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Test/BugReporting';
import BugReporting from './Test/BugReporting';
import Scripts from './Test/Scripts';
import Logs from './Test/Logs';
import Bugs from './Test/Bugs'
import Dashboard from './Test/Dashboard';
import Projects from './Test/Projects';
import Metrics from './Test/Metrics';
import CreateDevice from './Test/CreateDevice';
import DisplayDevices from './Test/DisplayDevices';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <BugReporting/> */}
        <Route exact path="/" component={Metrics}/>
        <Route path="/report_bug" component={BugReporting}/>
        <Route path="/scripts" component={Scripts}/>
        <Route path="/logs" component={Logs}/>
        <Route path="/bugs" component={Bugs}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/createDevice" component={CreateDevice}/>
        <Route path="/viewDevices" component={DisplayDevices}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

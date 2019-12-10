import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Test/BugReporting';
import BugReporting from './Test/BugReporting';
import Scripts from './Test/Scripts';
import Logs from './Test/Logs';
import Bugs from './Test/Bugs'
// import Main from './Chatbox/Main';
import Dashboard from './Test/Dashboard';
import Projects from './Test/Projects';
import Metrics from './Test/Metrics';
import CreateDevice from './Test/CreateDevice';
import DisplayDevices from './Test/DisplayDevices';
import SignUp from './User/Signup';
import {Route} from 'react-router-dom';
import Login from './Login/Login';
import {BrowserRouter} from 'react-router-dom';
// import UpdateProfile from './UpdateProfile/UpdateProfile';
import UpdateProfile from './User/UpdateProfile';
import CreateProject from './Manage/CreateProject';
import MyProjects from './Manage/MyProjects';
import GenerateScript from './Test/GenerateScript';
import Apply from './Test/Apply';
import MyApplications from './Test/MyApplications';
import MetricsManager from './Manage/MetricsManager';
import ViewApplications from './Manage/ViewApplications';
import ResourceUsageGraph from './Manage/ResourceUsageGraph';
import TestMessages from './Manage/TestMessages';
import TMTR from './Test/TestMessages';
import Billing from './Manage/Billing';
import Map from './Map/Map';
import TesterCommunity from './Test/TesterCommunity';
import ProjectOriented from './Manage/ProjectCommunity';
import ProjectTested from './Test/ProjectCommunity';

// import MetricsManager from './Manage/MetricsManager';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* <BugReporting/> */}
        <Route exact path="/" component={Login}/>
        <Route path="/metrics" component={Metrics}/>
        <Route path="/metricsManager" component={MetricsManager}/>
        <Route path="/createUser" component={SignUp}/>
        <Route path="/updateProfile" component={UpdateProfile}/>  
        <Route path="/apply" component={Apply}/>
        <Route path="/myApps" component={MyApplications}/>
        <Route path="/createProject" component={CreateProject}/> 
        <Route path="/myprojects" component={MyProjects}/>
        <Route path="/report_bug" component={BugReporting}/>
        <Route path="/scripts" component={Scripts}/>
        <Route path="/logs" component={Logs}/>
        <Route path="/bugs" component={Bugs}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/createDevice" component={CreateDevice}/>
        <Route path="/viewDevices" component={DisplayDevices}/>
        <Route path="/login" component={Login}/>
        <Route path="/viewApps" component={ViewApplications}/>
        <Route path="/genScript" component={GenerateScript}/>
        <Route path="/testMessages" component={TestMessages}/>
        <Route path="/tMT" component={TMTR}/>
        <Route path="/billing" component={Billing}/>
        <Route path="/map" component={Map}/>
        <Route path="/community" component={TesterCommunity}/>
        <Route path="/pro_com_pro" component={ProjectOriented}/>
        <Route path="/pro_com_test" component={ProjectTested}/>
        {/* <Route path="/chat" component={Main}/> */}
        {/* <Route path="/metricsManager" component={MetricsManager}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, {Component} from 'react';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import Dashboard from './Dashboard';
// import Sidebar from '../Sidebar/Sidebar';
import Axios from 'axios';
import cookie from 'react-cookies';
import { thisExpression } from '@babel/types';

class TestMessages extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects: [],
            widget: '',
            title: '',
            subtitle: ''
        }
    }
    
    // componentDidMount(){
    //     addResponseMessage("Welcome to this awesome chat!");
    // }
    componentDidMount(){
        const manager_id = cookie.load('manager_id');
        Axios.get('http://localhost:3001/getManagerProjects', {params: {manager_id}}).then(result=>{
            this.setState({
                projects: result.data
            })
        })
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
      }

    render(){

        let details = this.state.projects.map(entry=>{
            return(
                <tr key={entry._id}>
                    <td style={{textAlign: 'center'}}>{entry.project_id}</td>
                    <td style={{textAlign: 'center'}}>{entry.project_name}</td>
                    <td style={{textAlign: 'center'}}><a href="#"><i class='fas fa-comment-dots' onClick={()=>{
                        this.setState({
                            widget: <Widget title={entry.project_name} subtitle={entry.project_id}/>
                        })
                    }}></i></a></td>
                    <td style={{textAlign: 'center'}}><a href="#"><span onClick={()=>{
                        this.setState({
                            widget: ''
                        })
                    }} class="glyphicon glyphicon-remove"></span></a></td>
                </tr>
            )
        }) 

        return(
            <div class="container">
                {/* <Sidebar/> */}
                <Dashboard/>
                <h2>Chat</h2>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Project Name</th>
                            <th style={{textAlign: 'center'}}>Chat</th>
                            <th style={{textAlign: 'center'}}>Close</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details}
                        {this.state.widget}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TestMessages;
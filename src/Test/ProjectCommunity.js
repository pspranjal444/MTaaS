import React, {Component} from 'react';
import Dashboard from './Dashboard';
import Sidebar from '../Sidebar/Sidebar';
class ProjectTestOriented extends Component{
  shoot(){
    alert("Message sent successfully!")
  }
    render(){
        return(
            <div>
                <Dashboard/>
                <Sidebar/>
            <div className="row">
    <div className="col-sm-12">
        <br/>
        <br/>
        <h4 style={{color:'gray', fontFamily:"Open Sans", fontSize:'26px', fontWeight:'bold'}}>Discussion Groups</h4><br/><br/>
        <div className="align-self-center" style={{marginLeft:'450px', marginRight:'450px'}}>
        <button type="button" className="btn btn-success"   data-toggle="modal" data-target="#myModal3">Create New Group</button>
        <div className="modal fade" id="myModal3" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Create New Group</h4>
        </div>
        <div className="modal-body">
         <label>Enter the Group Name:</label><input type="text"/><br/>
        <label>Enter the Member Capacity:</label><input type="text"/><br/>
         <label>Enter the Group Admin Id:</label><input type="text"/><br/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.shoot}>Create</button>
        </div>
      </div>
      
    </div>
  </div>
        </div>
        <br/>
        <div class=" align-self-center">
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal4">Send Message</button>
                    </div>
                    <div className="modal fade" id="myModal4" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Compose Message</h4>
          Enter Receiver's Id:<input type="text"/><br/>
        </div>
        <div className="modal-body pull-left">
         <p>Start Typing Message.....</p>
         <br/>
         <br/>
         <br/>
         <br/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.shoot}>Send</button>
        </div>
      </div>
      
    </div>
  </div>
    <br/><br/>
        <div className="table-responsive" style={{fontFamily:"Arial", marginLeft:'270px', marginRight:'180px'}}>
        <table className="table table-hover" id="tbl">
        <thead>
        <tr style={{color:'black', fontFamily:"Open Sans", fontSize:'18px', fontWeight:'bold'}}>
                              
        <th className="text-center">Group Name</th>
                              <th className="text-center">Member Count</th>
                              <th className="text-center">Admin Id</th>
                              <th className="text-center">New Messages</th>
                          </tr>
                      </thead>
                      <tbody style={{color:'black', fontFamily:"Open Sans", fontSize:'15px', fontWeight:'bold'}}>
                          <tr>
                          <td class="text-center"><a data-target="#myModal4" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">Monuments Android Application</a></td>
                          <td className="text-center">11</td>
                           <td className="text-center">1122</td>
                              <td className="text-center"><p>No new message</p></td>
                          </tr>
                          <tr>
                              
                              <td className="text-center"><a data-target="#myModal4" data-toggle="modal" className="MainNavText" id="MainNavHelp" 
                              href="#myModal">Frontend Wunderlist</a></td>
                              <td className="text-center">34</td>
                              <td className="text-center">3275</td>
                              <th className="text-center"><p>No new message</p></th>
                          </tr>
                      </tbody>
                  </table>
                </div>
            </div>
        </div>
        
       </div> 
        );
    }
}

export default ProjectTestOriented;

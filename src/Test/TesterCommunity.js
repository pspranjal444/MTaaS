import React, {Component} from 'react';
import Dashboard from './Dashboard';
import Sidebar from '../Sidebar/Sidebar';
class TesterCommunity extends Component{
    shoot() {
        alert("Group Created successfully!");
      }
      confirm() {
        alert("Group Deleted successfully!");
      }
      remove() {
        alert("You are no longer a member of the group!");
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
        </div> <br/><br/>
        <div className="table-responsive" style={{fontFamily:"Arial", marginLeft:'270px', marginRight:'180px'}}>
        <table className="table table-hover" id="tbl">
        <thead>
        <tr style={{color:'black', fontFamily:"Open Sans", fontSize:'18px', fontWeight:'bold'}}>
                             
        <th className="text-center">Group Name</th>
                              <th className="text-center">Admin Id</th>
                              <th className="text-center">Member Count</th>
                              <th className="text-center">Join Group</th>
                              <th className="text-center">Leave Group</th>
                              <th className="text-center">Delete Group</th>
                              <th className="text-center">New Messages</th>
                          </tr>
                      </thead>
                      <tbody style={{color:'black', fontFamily:"Open Sans", fontSize:'15px', fontWeight:'bold'}}>
                          <tr>
                          <td class="text-center"><a data-target="#myModal4" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">Intelligent Application Testing</a></td>
                              <td className="text-center">2347</td>
                              <td className="text-center">18</td>
                              <td className="text-center"><button type="button" id="btn" class="btn btn-primary" data-toggle="modal" data-target="#myModal" disabled>Request Admin</button></td>
                              <td className="text-center"><button type="button" id ="btn1" class="btn btn-warning" data-toggle="modal" data-target="#myModal1" >Leave</button></td>
                              <div className="modal fade" id="myModal1" role="dialog">
    <div className="modal-dialog">
      </div><div class="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Leave Group</h4>
        </div>
        <div className="modal-body">
          <p>Enter your id</p>
          <input type="text"/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.remove}>Exit</button>
        </div>
      </div>
      </div>
     
   
                              <td className="text-center"><button type="button" id="btn2" class="btn btn-danger" disabled>Delete</button></td>
                              <th className="text-center"><button type="button" id="btn3" class="btn btn-info" >View new message</button></th>
                          </tr>
                          <tr>
                             
                              <td className="text-center"><a data-target="#myModal4" data-toggle="modal" className="MainNavText" id="MainNavHelp"
                              href="#myModal">Drone VR System</a></td>
                              <td className="text-center">1002</td>
                              <td className="text-center">2</td>
                              <td className="text-center"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add</button></td>
                              <td className="text-center"><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal1">Leave</button></td>
                              <td className="text-center"><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal2">Delete</button></td>
                              <div class="modal fade" id="myModal2" role="dialog">
    <div class="modal-dialog">
   
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Delete</h4>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete the group?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" onClick={this.confirm}>Yes</button>
        </div>
      </div>
     
    </div>
  </div>
                              <th className="text-center"><button type="button" class="btn btn-info" >View new message</button></th>
                          </tr>
                          <tr>
                             
                              <td className="text-center"><a data-target="#myModal4" data-toggle="modal" className="MainNavText" id="MainNavHelp"
                              href="#myModal">Mess Management Website</a></td>
                              <td className="text-center">3004</td>
                              <td className="text-center">17</td>
                              <td className="text-center"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Request Admin</button></td>
                              <td className="text-center"><button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal1" disabled>Leave</button></td>
                              <td className="text-center"><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#myModal2" disabled>Delete</button></td>
                              <th className="text-center" disabled><p>No messages</p></th>
                          </tr>
                          <tr>
                          <td class="text-center"><a data-target="#myModal4" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">Twitter Testing</a></td>
                              <td className="text-center">4567</td>
                              <td className="text-center">28</td>
                              <td className="text-center"><button type="button" id="btn" class="btn btn-primary" data-toggle="modal" data-target="#myModal" disabled>Request Admin</button></td>
                              <td className="text-center"><button type="button" id ="btn1" class="btn btn-warning" data-toggle="modal" data-target="#myModal1">Leave</button></td>
                              <td className="text-center"><button type="button" id="btn2" class="btn btn-danger" disabled>Delete</button></td>
                              <th className="text-center"><button type="button" id="btn3" class="btn btn-info" data-toggle="modal" data-target="#myModal4">View new message</button></th>

                          </tr><tr>
                          <td class="text-center"><a data-target="#myModal4" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">Android Application Testing</a></td>
                              <td className="text-center">4734</td>
                              <td className="text-center">23</td>
                              <td className="text-center"><button type="button" id="btn" class="btn btn-primary" data-toggle="modal" data-target="#myModal" disabled>Request Admin</button></td>
                              <td className="text-center"><button type="button" id ="btn1" class="btn btn-warning" data-toggle="modal" data-target="#myModal1">Leave</button></td>
                              <td className="text-center"><button type="button" id="btn2" class="btn btn-danger" disabled>Delete</button></td>
                              <th className="text-center"><p>No messages</p></th>
                          </tr>
                          <tr>
                          <td class="text-center"><a data-target="#myModal4" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">Graph Application Testing</a></td>
                              <td className="text-center">2029</td>
                              <td className="text-center">12</td>
                              <td className="text-center"><button type="button" id="btn" class="btn btn-primary" data-toggle="modal" data-target="#myModal" disabled>Request Admin</button></td>
                              <td className="text-center"><button type="button" id ="btn1" class="btn btn-warning" data-toggle="modal" data-target="#myModal1">Leave</button></td>
                              <td className="text-center"><button type="button" id="btn2" class="btn btn-danger" disabled>Delete</button></td>
                              <th className="text-center"><p >No messages</p></th>
                          </tr>
                          <tr>
                          <td class="text-center"><a data-target="#myModal4" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">Shopping Website Testing</a></td>
                              <td className="text-center">1002</td>
                              <td className="text-center">13</td>
                              <td className="text-center"><button type="button" id="btn" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add</button></td>
                              <td className="text-center"><button type="button" id ="btn1" class="btn btn-warning" data-toggle="modal" data-target="#myModal1">Leave</button></td>
                              <td className="text-center"><button type="button" id="btn2" class="btn btn-danger">Delete</button></td>
                              <th className="text-center"><p>No messages</p></th>
                          </tr>
                          <tr>
                          <td class="text-center"><a data-target="#myModal4" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">Graffiti Detection Model Testing</a></td>
                              <td className="text-center">1002</td>
                              <td className="text-center">16</td>
                              <td className="text-center"><button type="button" id="btn" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add</button></td>
                              <td className="text-center"><button type="button" id ="btn1" class="btn btn-warning" data-toggle="modal" data-target="#myModal1">Leave</button></td>
                              <td className="text-center"><button type="button" id="btn2" class="btn btn-danger">Delete</button></td>
                              <th className="text-center"><p>No messages</p></th>
                          </tr>
                          <tr>
                          <td class="text-center"><a data-target="#myModal4" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">Starbucks Mobile App Testing</a></td>
                              <td className="text-center">1002</td>
                              <td className="text-center">12</td>
                              <td className="text-center"><button type="button" id="btn" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add</button></td>
                              <td className="text-center"><button type="button" id ="btn1" class="btn btn-warning" data-toggle="modal" data-target="#myModal1">Leave</button></td>
                              <td className="text-center"><button type="button" id="btn2" class="btn btn-danger">Delete</button></td>
                              <th className="text-center"><button type="button" id="btn3" class="btn btn-info" >View new message</button></th>
   
                          </tr>
                          <tr>
                          <td class="text-center"><a data-target="#myModal4" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">Distributed Memory Application Testing</a></td>
                              <td className="text-center">1002</td>
                              <td className="text-center">9</td>
                              <td className="text-center"><button type="button" id="btn" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add</button></td>
                              <td className="text-center"><button type="button" id ="btn1" class="btn btn-warning" data-toggle="modal" data-target="#myModal1">Leave</button></td>
                              <td className="text-center"><button type="button" id="btn2" class="btn btn-danger">Delete</button></td>
                              <th className="text-center"><button type="button" id="btn3" class="btn btn-info" >View new message</button></th>
   
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

export default TesterCommunity;
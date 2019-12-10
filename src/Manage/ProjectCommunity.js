import React, {Component} from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

class ProjectOriented extends Component{
    shoot() {
        alert("Group Created successfully!");
      }
      confirm() {
        alert("Group Deleted successfully!");
      }
      remove() {
        alert("Member removed successfully!");
      }
    render(){
        return(
            <div class="container" style={{width: "1200px"}}>
                {/* <Sidebar/> */}
                <Dashboard/>
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
    <br/><br/>
        <div className="table-responsive" style={{fontFamily:"Arial", marginLeft:'270px', marginRight:'180px'}}>
        <table className="table table-hover" id="tbl">
        <thead>
        <tr style={{color:'black', fontFamily:"Open Sans", fontSize:'18px', fontWeight:'bold'}}>
                              
        <th className="text-center">Group Name</th>
                              <th className="text-center">Member Count</th>
                              <th className="text-center">Add Member</th>
                              <th className="text-center">Delete Member</th>
                              <th className="text-center">Delete Group</th>
                              <th className="text-center">New Messages</th>
                          </tr>
                      </thead>
                      <tbody style={{color:'black', fontFamily:"Open Sans", fontSize:'15px', fontWeight:'bold'}}>
                          <tr>
                          <td class="text-center"><a data-target="#myModal4" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">Nearby Travels</a></td>
                              <td className="text-center">22</td>
                              <td className="text-center"><button type="button" id="btn" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Member</button></td>
                              <td className="text-center"><button type="button" id ="btn1" class="btn btn-warning" data-toggle="modal" data-target="#myModal1" >Remove Member</button></td>
                              <div className="modal fade" id="myModal1" role="dialog">
    <div className="modal-dialog">
      </div><div class="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Remove Member</h4>
        </div>
        <div className="modal-body">
          <p>Enter member's id</p>
          <input type="text"/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.remove}>Exit</button>
        </div>
      </div>
      </div>
      
    
                              <td className="text-center"><button type="button" id="btn2" class="btn btn-danger">Delete Group</button></td>
                              <th className="text-center"><button type="button" id="btn3" class="btn btn-info" >View new message</button></th>
                          </tr>
                          <tr>
                              
                              <td className="text-center"><a data-target="#myModal4" data-toggle="modal" className="MainNavText" id="MainNavHelp" 
                              href="#myModal">Ant Colony Optimization</a></td>
                              <td className="text-center">5</td>
                              <td className="text-center"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add</button></td>
                              <td className="text-center"><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal1">Remove Member</button></td>
                              <td className="text-center"><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal2">Delete Group</button></td>
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
                              <td className="text-center">17</td>
                              <td className="text-center"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add</button></td>
                              <td className="text-center"><button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal1">Remove Member</button></td>
                              <td className="text-center"><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#myModal2">Delete Group</button></td>
                              <th className="text-center" disabled><p>No messages</p></th>
                          </tr>
                          <tr>
                          <td class="text-center"><a data-target="#myModal4" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="#myModal">iOS Testing</a></td>
                              <td className="text-center">18</td>
                              <td className="text-center"><button type="button" id="btn" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add</button></td>
                              <td className="text-center"><button type="button" id ="btn1" class="btn btn-warning" data-toggle="modal" data-target="#myModal1">Remove Member</button></td>
                              <td className="text-center"><button type="button" id="btn2" class="btn btn-danger" disabled>Delete Group</button></td>
                              <th className="text-center"><button type="button" id="btn3" class="btn btn-info" data-toggle="modal" data-target="#myModal4">No new message</button></th>

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

export default ProjectOriented;
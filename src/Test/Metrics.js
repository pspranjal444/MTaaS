import React, {Component} from 'react';
import Dashboard from './Dashboard';
class Metrics extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="container">
                <Dashboard/>
                {/* <div style={{width: '100px', height: '60px', boxShadow: '3px 3px #888888'}}>

                </div> */}
                <img src={require('./dashboard.png')} style={{width: '100%', marginLeft: '15px', marginTop: '40px'}}></img>
            </div>
        );
    }
}

export default Metrics;
import React, {Component} from 'react';
import Axios from 'axios';
import cookie from 'react-cookies';
import Dashboard from './Dashboard';
import { PayPalButton } from "react-paypal-button-v2";

class Billings extends Component {
    constructor(){
        super();

        this.state = {
            amount: []
        }
    }

    componentDidMount(){
        const manager_id = cookie.load('manager_id');
        Axios.get('http://localhost:3001/getAmount', {params: {manager_id}}).then(result=>{
            this.setState({
                amount: result.data
            })
        })
    }

    render(){
        return (
            <div class="container">
                <Dashboard/>
                        <h2>Billing</h2>
                
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th style={{textAlign: 'center'}}>Project ID</th>
                            <th style={{textAlign: 'center'}}>Tester ID</th>
                            <th style={{textAlign: 'center'}}>Amount</th>
                            <th style={{textAlign: 'center'}}>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{textAlign: 'center'}}>45547</td>
                            <td style={{textAlign: 'center'}}>13294</td>
                            <td style={{textAlign: 'center'}}>$230</td>
                            <td style={{textAlign: 'center', width: "5px"}}><PayPalButton amount="0.01" onSuccess={(details, data) => {alert("Transaction completed by")}}/></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>26581</td>
                            <td style={{textAlign: 'center'}}>79307</td>
                            <td style={{textAlign: 'center'}}>$124</td>
                            <td style={{textAlign: 'center'}}><PayPalButton amount="0.01" onSuccess={(details, data) => {alert("Transaction completed by")}}/></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>48983</td>
                            <td style={{textAlign: 'center'}}>80094</td>
                            <td style={{textAlign: 'center'}}>$450</td>
                            <td style={{textAlign: 'center'}}><PayPalButton amount="0.01" onSuccess={(details, data) => {alert("Transaction completed by")}}/></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>59232</td>
                            <td style={{textAlign: 'center'}}>71491</td>
                            <td style={{textAlign: 'center'}}>$524</td>
                            <td style={{textAlign: 'center'}}><PayPalButton amount="0.01" onSuccess={(details, data) => {alert("Transaction completed by")}}/></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: 'center'}}>86159</td>
                            <td style={{textAlign: 'center'}}>69636</td>
                            <td style={{textAlign: 'center'}}>$418</td>
                            <td style={{textAlign: 'center'}}><PayPalButton amount="0.01" onSuccess={(details, data) => {alert("Transaction completed by")}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}            
     
export default Billings;
            
            
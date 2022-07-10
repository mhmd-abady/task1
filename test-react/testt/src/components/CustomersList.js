import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Customer = props =>(
  
    <tr>
     
        <td>{props.customer.id}</td>
        <td>{props.customer.name}</td>
        <td>{props.customer.address}</td>
        <td> +961 {props.customer.phoneNumber}</td>
        <td>
            <Link to = {"/update/"+props.customer._id} onClick={() => window.location.replace()} >edit</Link> | <a href="/#" onClick={()=>{props.deleteCustomer(props.customer._id)}}>delete</a>
        </td>
    </tr>
)

export default class CustomersList extends Component{
    constructor(props) {
        super(props);
    
        this.deleteCustomer = this.deleteCustomer.bind(this)
        this.filterCustomers = this.filterCustomers.bind(this);

        this.state = {customers: []};
      }
      
    
      componentDidMount() {
        axios.get('http://localhost:3000/customers/')
          .then(response => {
            this.setState({ customers: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      deleteCustomer(id) {
        axios.delete('http://localhost:3000/customers/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          customers: this.state.customers.filter(el => el._id !== id)
        })
      }
    
      customersList() {
        return this.state.customers.map(cust => {
          return <Customer customer={cust} deleteCustomer={this.deleteCustomer} key={cust._id}/>;
        })
      }
      
     
      filterCustomers(e){
        var filter = document.getElementById('filter');
        filter.addEventListener('keyup',this.filterCustomers);

        var text = e.target.value.toLowerCase();
        console.log(text)

        var custs = document.getElementsByTagName('tr')
        console.log(custs)

        Array.from(custs).forEach(function(item){
          var itemName = item.childNodes[1].textContent;
          console.log(itemName)

          if(itemName.toLowerCase().indexOf(text) !==-1){
            item.style.display = 'block';
          }else{
            item.style.display = 'none';
          }
        })
      }

      render() {
       
        return (
          <div>

          <h2>Search</h2>
          <input type="text" placeholder="search..." id='filter' onKeyUp={this.filterCustomers}/>
          

            <br/><br/><br/>
            <h3>Customers</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>PhoneNumber</th>
                </tr>
              </thead>
              <tbody>
              
                
                { this.customersList() }
                
              </tbody>
              
            </table>
          </div>
        )
      }
}
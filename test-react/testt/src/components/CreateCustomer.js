import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CreateCustomer extends Component{
    
    constructor(props){
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            id:'',
            name:'',
            address:'',
            phoneNumber:''
        }
    }

    onChangeId(e) {
      this.setState({
        id: e.target.value
      })
    }

    onChangeName(e) {
        this.setState({
          name: e.target.value
        })
      }

      onChangeAddress(e) {
        this.setState({
          address: e.target.value
        })
      }

      onChangePhone(e) {
        this.setState({
          phoneNumber: e.target.value
        })
      }
    
      onSubmit(e){
        e.preventDefault();

        const cust = {
            id : this.state.id,
            name: this.state.name,
            address : this.state.address,
            phoneNumber: this.state.phoneNumber
        }

        console.log(cust);
        axios.post('http://localhost:3000/customers/add', cust)
      .then(res => console.log(res.data));

        window.location = '/';

      }

    render(){
        return(
         <div>
            <h3>Create New Customer </h3>
      <form onSubmit={this.onSubmit}>

      <div className="form-group"> 
          <label>ID: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.id}
              onChange={this.onChangeId}
              />
        </div>

        <div className="form-group"> 
          <label>Name: </label>
          <input type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}>
            
          </input>
        </div>
        <div className="form-group"> 
          <label>Address: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
              />
        </div>
        <div className="form-group">
          <label>Phone Number: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.phoneNumber}
              onChange={this.onChangePhone}
              />
        </div>
        

        <div className="form-group">
          <input type="submit" value="Create Customer" className="btn btn-primary" />
        </div>
      </form>
         </div>
        )
    }
}
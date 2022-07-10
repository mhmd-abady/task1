import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditCustomer extends Component{

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
componentDidMount() {
    axios.get('http://localhost:3000/customers/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          address: response.data.address,
          phoneNumber: response.data.phoneNumber,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })}

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
      id: this.state.id,
      name: this.state.name,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
    }

    console.log("hello" + cust);

    axios.post('http://localhost:3000/customers/update/' + this.props.match.params.id, cust)
      .then(res => console.log(res.data));

    console.log("hellloooooooooooooooooooooo")

    window.location = '/';
  }

    render(){
        return(
            <div>
            <h3>Edit Customer </h3>
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
                required
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
                <input type="submit" value="Finish" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}
import React from 'react';
import firestore from './Firestore.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/analytics';

import { withAuth0 } from '@auth0/auth0-react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     email: '',
     firstname: '',
     surname: '',
     dateOfBirth: '',
     phoneNumber: '',
     DUI: false,
     smartPhone: true,
     username: '',
     vehiclePreference: '',
     id: ''
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("users").doc(this.state.id).set({
      firstname: this.state.firstname,
      surname: this.state.surname,
      email: this.state.email,
      dateOfBirth: this.state.dateOfBirth,
      phoneNumber: this.state.phoneNumber,
      DUI: this.state.DUI,
      smartPhone: this.state.smartPhone,
      username: this.state.username,
      vehiclePreference: this.state.vehiclePreference
    });
    this.setState({
      firstname: "",
      surname: "",
      email: "",
      dateOfBirth: "",
      phoneNumber: '',
      DUI: '',
      smartPhone: '',
      username: '',
      vehiclePreference: ''
    });
  };

  componentDidMount = () => {
      this.setState({
        ...this.state,
        email: this.props.auth0.user.email,
        id: this.props.auth0.user.sub.replace('auth0|', '')
      })

  }

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={this.updateInput}
            value={this.state.fullname}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            onChange={this.updateInput}
            value={this.state.surname}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.updateInput}
            value={this.state.username}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date Of Birth"
            onChange={this.updateInput}
            value={this.state.dateOfBirth}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={this.updateInput}
            value={this.state.phoneNumber}
          />
        Do you have a DUI?
          <select
              type="text"
              name="DUI"
              placeholder="DUI"
              onChange={this.updateInput}
              value={this.state.DUI}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>


          </select>
        Do you have a smart phone?
        <select
            type="text"
            name="smartPhone"
            placeholder="Smart Phone"
            onChange={this.updateInput}
            value={this.state.smartPhone}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>

        </select>
        Vehicle Preference:
        <select
            type="text"
            name="vehiclePreference"
            placeholder="Vehicle Preference"
            onChange={this.updateInput}
            value={this.state.vehiclePreference}
          >
          <option value="E2">Boda Boda (E2)</option>
          <option value="E3">Tuk Tuk (E3)</option>
          <option value="Both">Both</option>
        </select>
          <button
            type="button"
            onClick={this.addUser}>
            Submit
          </button>
        </form>
        </>
        );
      }
   }
export default withAuth0(User);

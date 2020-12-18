import React from 'react';
import { Container, Table } from 'reactstrap';
import './Firestore.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/analytics';

import VerifiedIcon from './assets/img/verified-icon.png';
//import { useAuth0 } from '@auth0/auth0-react';


const db = firebase.firestore();


const VerificationDashboard = props => {

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  })


  React.useEffect(() => {
      db.collection('users').get()
      .then(response => {
        const fetchedUsers = [];
        response.docs.forEach(user => {
          const fetchedUser = {
            id: user.id,
            ...user.data()
          };
          fetchedUsers.push(fetchedUser);
        })
        setUsers(fetchedUsers);
      })
      .catch(error => {
        console.log(error);
      })
  }, [setUsers])

  const mapUsers = () => {
    return(
      users.map(user => {
        let verificationStatus = ''
        if (user.verified) {
          verificationStatus = 'Verified';
        }
        else {
          verificationStatus = 'Not Verified';
        }
        return (
          <tr key={user.id} id={user.id} onClick={props.handleUserClicked}>
            <td id={user.id} >{user.firstname}</td>
            <td id={user.id} >{user.lastname}</td>
            <td id={user.id} >{user.id}</td>
            <td id={user.id} >
              <span>
                {verificationStatus}
              </span>
              <span style={{padding: '2px'}}>

              </span>
              <span>
                {user.verified ?
                  <img src={VerifiedIcon} alt='verified icon' style={{width: '20px', marginTop: '-2px'}}>
                  </img>
                :
                ''}
              </span>


            </td>
          </tr>
        )

      })
    )
  }


  return (
    <>
      <Container style={{paddingTop: '30px'}}>

        <Table hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>ID</th>
              <th>Verification Status</th>
            </tr>
          </thead>
          <tbody>
            {mapUsers()}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default VerificationDashboard;

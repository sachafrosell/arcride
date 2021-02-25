import React from 'react';
import { Container, Button, Table } from 'reactstrap';
import './Firestore.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/analytics';

import Spinner from './Spinner.js';
import VerifiedIcon from './assets/img/verified-icon.png';
import { Document, Page, pdfjs } from 'react-pdf';


const db = firebase.firestore();
//const storage = firebase.storage();
// const storage = firebase.storage();
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const ButtonStyle1 = {
  background: 'none',
  backgroundColor: 'rgba(0, 255, 0, 0.2)',
  color: 'black',
  border:'solid 0.7px black',
  borderRadius: '0px',
  fontSize: '13px',
  marginLeft: '30px'
}

const ButtonStyle3 = {
  background: 'none',
  backgroundColor: 'rgba(255, 0, 0, 0.5)',
  color: 'black',
  border:'solid 0.7px black',
  borderRadius: '0px',
  fontSize: '13px',
  marginLeft: '30px'
}

const ButtonStyle2 = {
  background: 'none',
  color: 'black',
  border:'solid 0.7px black',
  borderRadius: '0px',
  fontSize: '13px',
  marginLeft: '30px'
}


const UserProfile = props => {

  const [userDetails, setUserDetails] = React.useState(null);
  const [verifiedStatus, setVerifiedStatus] = React.useState('');

  const onDocumentLoadSuccess = ({ numPages }) => {
   console.log("loaded CV")
  }


  React.useEffect(() => {

      db.collection('users').doc(props.userId).get()
      .then(response => {
        setUserDetails(response.data());

      })
  }, [props.userId])

  React.useEffect(() => {
    if (userDetails) {
      if (userDetails.verified) {
        setVerifiedStatus('Verified');
      }
      else {
        setVerifiedStatus('Not Verified');
      }
    }
  }, [userDetails])

  const deleteFolderContents = (path) => {
       const ref = firebase.storage().ref(path);
       ref.listAll()
         .then(dir => {
           dir.items.forEach(fileRef => {
             deleteFile(ref.fullPath, fileRef.name);
           });
           dir.prefixes.forEach(folderRef => {
             deleteFolderContents(folderRef.fullPath);
           })
         })
         .catch(error => {
           console.log(error);
         });
     }

   const deleteFile = (pathToFile, fileName) => {
     const ref = firebase.storage().ref(pathToFile);
     const childRef = ref.child(fileName);
     childRef.delete()
   }




  const handleClick = e => {
    if (e.target.id === 'deleteUser') {
      if (window.confirm('Are you sure you want to delete this user. This action cannot be undone!')) {
        //insert method to store urls of data and delete it from the database
        deleteFolderContents(`/Drivers/${props.userId}`)
        db.collection('users').doc(props.userId).delete()
        // storage.ref(`/Drivers/${props.userId}`).delete();

        props.handleBackButtonClick()
      }
    }
    else
    {
      const newUserDetails = {
          ...userDetails,
          verified: !userDetails.verified
        }
        setUserDetails(newUserDetails)
        db.collection('users').doc(props.userId).update(newUserDetails)
    }

  }

  const dim = (bool) => {
      if (typeof bool=='undefined') bool=true; // so you can shorten dim(true) to dim()
      document.getElementById('dimmer').style.display=(bool?'block':'none');
  }

  const handleFileClick = e => {
    e.preventDefault();
    let win = window.open(userDetails.URLs.cv, '_blank');
    win.focus();
  }

    const handleImageClick = e => {
      if (e.target.style.transform === 'scale(5)') {
        dim(false);
        e.target.style.transform = 'scale(1)';
        e.target.style.zIndex = 0;
      }
      else {
        e.target.style.transform = 'scale(5)';
        e.target.style.zIndex = 10;
        dim(true);
      }
      e.target.style.transition = 'transform 0.25s ease';
    }

    const handlePdfClick = e => {
      if (e.target.style.width === '100px') {
        if (userDetails) {
          let win = window.open(userDetails.URLs.cv, '_blank');
          win.focus();
        }
      }

    }

    const userInfo = () => {
      let buttonText = '';
      if (userDetails.verified) {
        buttonText = 'UN-VERIFY';
      }
      else {
        buttonText = 'VERIFY';
      }
      return (

        <div style={{marginTop: '30px', marginBottom: '30px'}}>

          <Table>
            <tbody>
              <tr>
                <td> Name</td>
                <td>{userDetails.firstname} {userDetails.lastname}</td>
              </tr>
              <tr>
                <td> User Name</td>
                <td>{userDetails.username}</td>
              </tr>
              <tr>
                <td> ID</td>
                <td>{props.userId}</td>
              </tr>
              <tr>
                <td> Date Of Birth</td>
                <td>{userDetails.dateOfBirth}</td>
              </tr>
              <tr>
                <td> Email</td>
                <td>{userDetails.email}</td>
              </tr>

              <tr>
                <td> Phone Number</td>
                <td>{userDetails.phoneNumber}</td>
              </tr>
              <tr>
                <td> Guarantor Name</td>
                <td>{userDetails.guarantorName}</td>
              </tr>
              <tr>
                <td> Guarantor Number</td>
                <td>{userDetails.guarantorNumber}</td>
              </tr>
              <tr>
                <td> Guarantor Address</td>
                <td>{userDetails.guarantorAddress}</td>
              </tr>
              <tr>
                <td> Guarantor Job Title</td>
                <td>{userDetails.guarantorJob}</td>
              </tr>
              <tr>
                <td> GPS enabled smart phone?</td>
                <td>{userDetails.smartPhone.toString()}</td>
              </tr>
              <tr>
                <td> Vehicle Preference</td>
                <td>{userDetails.vehiclePreference}</td>
              </tr>
              <tr>
                <td> Agreed to T&C's</td>
                <td>{userDetails.agree}</td>
              </tr>
              <tr>
                <td> DUI</td>
                <td>{userDetails.DUI}</td>
              </tr>
              <tr>
                <td> Passport </td>
                <td>
                  <Button onClick={handleFileClick}>
                    View Passport
                  </Button>

                </td>
              </tr>
              <tr>
                <td> Drivers Licence </td>
                <td>
                  <img src={userDetails.URLs ? userDetails.URLs['drivers-licence'] : ''} alt='drivers licence' onClick={handleImageClick} style={{width: '100px', scale: 1, position: 'relative'}}>
                  </img>
                </td>
              </tr>
              <tr>
                <td> National ID </td>
                <td>
                  <img src={userDetails.URLs ? userDetails.URLs['national-id'] : ''} alt='national id' onClick={handleImageClick} style={{width: '100px', scale: 1, position: 'relative'}}>
                  </img>
                </td>
              </tr>
              <tr>
                <td> Commendation Certificate </td>
                <td>
                  <img src={userDetails.URLs ? userDetails.URLs['certificate-of-commendation'] : ''} alt='commendation' onClick={handleImageClick} style={{width: '100px', scale: 1, position: 'relative'}}>
                  </img>
                </td>
              </tr>
              <tr>
                <td> CV image</td>
                <td>
                  <img src={userDetails.URLs ? userDetails.URLs['cv'] : ''} alt='cv' onClick={handleImageClick} style={{width: '100px', scale: 1, position: 'relative'}}>
                  </img>
                </td>
              </tr>
              <tr>
                <td> CV pdf</td>
                <td>
                  <Document
                    file={userDetails.URLs ? userDetails.URLs.cv : ''}
                    onLoadSucess={onDocumentLoadSuccess}
                  >
                    <div>
                      <Page onClick={handlePdfClick} id='PDF' pageNumber={1} width={100}/>
                    </div>

                  </Document>



                </td>

              </tr>
              <tr>
                <td> Verification Status</td>
                <td>
                  <span>
                    {verifiedStatus}
                  </span>
                  <span style={{padding: '2px'}}>

                  </span>
                  <span>
                    {userDetails.verified ?
                      <img src={VerifiedIcon} alt='verified icon' style={{width: '20px', marginTop: '-2px'}}>
                      </img>
                    :
                    ''}
                  </span>
                </td>
              </tr>

            </tbody>

          </Table>

          <Button style={ButtonStyle2} onClick={props.handleBackButtonClick}> GO BACK </Button>
          <Button style={ButtonStyle1} onClick={handleClick}> {buttonText} </Button>
          <Button style={ButtonStyle3} id='deleteUser' onClick={handleClick}> DELETE PROFILE </Button>
        </div>
      )
    }

  return(
    <Container>
      {userDetails ?
        userInfo()
        :
        <Spinner />
      }

    </Container>
  )
}

export default UserProfile;

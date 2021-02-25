import React, { useState } from "react";
import './Firestore.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/analytics';

import { useAuth0 } from "@auth0/auth0-react";
// import { Form, Input } from 'reactstrap';

const storage = firebase.storage();



export default function App(props) {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [testUpload, setTestUpload] = useState(true)
  const [stopLoop, setStopLoop] = useState(true)
  const { user } = useAuth0();

  React.useEffect(() => {
    let mounted = true;
    if (props.verifyUpload && testUpload && mounted) {
      const userID = user.sub.replace('auth0|', '');
      let fileName = "cv"
      if file.name.split('.')[1] {
        fileName = `cv.${file.name.split('.')[1]}`
      }

      const storageRef = storage.ref(`/Drivers/${userID}/${fileName}`);


      const task = storageRef.put(file);
      task.on(firebase.storage.TaskEvent.STATE_CHANGED, {
        'next': (snapshot) => {
          let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          props.uploadPercentage("cv", progress);
        },
        'complete': () => {
          storageRef.getDownloadURL().then((url) => {
            setFile(null);
            setURL(url);
          })
        }
      })
      setTestUpload(false)
    }
    return () => mounted = false;
  }, [props.verifyUpload, testUpload, user.sub, file, props])

  React.useEffect(() => {
    //let mounted = true;
    if (url !== "" && stopLoop) {
      props.setFinishUpload("cv")
      props.documentURL("cv", url)
      setStopLoop(false)
    }
    //return () => mounted = false;
  }, [url, stopLoop, props])




  function handleChange(e) {
    setFile(e.target.files[0]);
  }




  function signIn() {



    firebase.auth().signInAnonymously()
      .then(() => {
        // Signed in..
      })
      .catch((error) => {

        // ...
      })
  }

  return (

    <div>
      {signIn()}
      <form >
        <input type="file" name="cv" onChange={handleChange} onClick={props.checkDocumentSubmission}/>
        <div style={{float: "right"}}>
        Upload CV
        </div>

      </form>
    </div>
  );
}

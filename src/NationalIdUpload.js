import React, { useState } from "react";
import './Firestore.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/analytics';

import { useAuth0 } from "@auth0/auth0-react";

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
      const storageRef = storage.ref(`/Drivers/${userID}/certificate-of-good-conduct`);
      const task = storageRef.put(file);
      task.on(firebase.storage.TaskEvent.STATE_CHANGED, {
        'next': (snapshot) => {
          let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          props.uploadPercentage("certificate-of-good-conduct", progress);
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

  function handleChange(e) {
    setFile(e.target.files[0]);
  }


  React.useEffect(() => {
    //let mounted = true;
    if (url !== "" && stopLoop) {
      props.setFinishUpload("certificate-of-good-conduct")
      props.documentURL("certificate-of-good-conduct", url)
      setStopLoop(false)
    }
    //return () => mounted = false;
  }, [url, stopLoop, props])

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
        <input type="file" name="certificateOfGoodConduct" onChange={handleChange} onClick={props.checkDocumentSubmission}/>
        <div style={{float: "right"}}>
        Upload E-Citizen Certificate of Good Conduct
        </div>

      </form>

    </div>
  );
}

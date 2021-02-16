import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MenuItem } from '@material-ui/core';
import './Firestore.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/analytics';

import { withAuth0 } from '@auth0/auth0-react';


//import axios from 'axios';


function setInputFilter(textbox, inputFilter) {
//console.log(textbox.value.length)
	if (textbox) {
		//
		["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if ((inputFilter(this.value)) && (textbox.value.length <= 13)) {

        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
				//console.log(this.value, this.selectionStart, this.selectionEnd)
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
	}

}

const styles = (theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	typography: {
		fontFamily: 'Montserrat'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
		fontFamily: 'Montserrat'
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	progess: {
		position: 'absolute'
	}
});

class signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			phoneNumber: '',
			dateOfBirth: '',
			username: '',
			email: '',
			smartPhone: '',
			DUI: '',
			vehiclePreference: '',
			id: '',
			errors: [],
			loading: false,
			E2: false,
			helmet: '',
			guarantorName: '',
			guarantorJob: '',
			guarantorNumber: '',
			guarantorAddress: '',
			agree: ''

		};
	}

	componentDidUpdate() {

			setInputFilter(document.getElementById("phoneNumber"), function(value) {
			  return /^\d*?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
			});
			setInputFilter(document.getElementById("guarantorNumber"), function(value) {
			  return /^\d*?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
			});
	}

	addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();

    db.collection("users").doc(this.state.id).set({
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      dateOfBirth: this.state.dateOfBirth,
      phoneNumber: this.state.phoneNumber,
      DUI: this.state.DUI,
      smartPhone: this.state.smartPhone,
      username: this.state.username,
      vehiclePreference: this.state.vehiclePreference,
			helmet: this.state.helmet,
			guarantorJob: this.state.guarantorJob,
			guarantorName: this.state.guarantorName,
			guarantorNumber: this.state.guarantorNumber,
			guarantorAddress: this.state.guarantorAddress,
			agree: this.state.agree
    });
    this.setState({
      firstname: "",
      lastname: "",
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

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		}, () =>
		(this.state.vehiclePreference === "E2" || this.state.vehiclePreference === "Both") ? this.setState({
			...this.state,
			E2: true
		}) : ''
		)
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.agree == "No" || this.state.DUI == "Yes") {
			Window.alert("There is an error in your application. One or more options may be incorrect or not align with our policies. Please go over the information again to check for any errors and if there is still an issue then contact us")
		} else {
			this.addUser(event)
			this.props.changePage();
		}
	};

	render() {
		const { classes } = this.props;
		const { errors, loading } = this.state;
		return (
			<Container component="main" maxWidth="xs">

				<div className={classes.paper} style={{marginTop: "50px", marginBottom: "50px"}}>

					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="firstName"
									label="First Name"
									name="firstName"
									autoComplete="firstName"
                  style={{borderRadius: 0}}
									helperText={errors.firstName}
									error={errors.firstName ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="lastName"
									helperText={errors.lastName}
									error={errors.lastName ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="username"
									label="User Name"
									name="username"
									autoComplete="username"
									helperText={errors.username}
									error={errors.username ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>

							<Grid item xs={12} sm={6}>

								<TextField
									variant="outlined"
									required
									fullWidth
									id="phoneNumber"
									type="tel"
									label="Phone Number"
									name="phoneNumber"
									autoComplete="phoneNumber"

									helperText={errors.phoneNumber}
									error={errors.phoneNumber ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="dateOfBirth"
									type="date"
									label="Date Of Birth"
									name="dateOfBirth"
									InputLabelProps={{
							      shrink: true,
							    }}
									helperText={errors.email}
									error={errors.email ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="select"
									name="DUI"
									label="DUI or DWI violation in the last three years?"
									value={this.state.DUI}
									onChange={this.handleChange}
								select>
									<MenuItem value="No">No</MenuItem>
									<MenuItem value="Yes">Yes</MenuItem>
								</TextField>

							</Grid>

							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="select"
									name="vehiclePreference"
									label="What is your vehicle preference?"
									value={this.state.vehiclePreference}
									onChange={this.handleChange}
								select>
									<MenuItem value="E2">Boda Boda (E2)</MenuItem>
									<MenuItem value="E3">Tuk Tuk (E3)</MenuItem>
									<MenuItem value="Both">Both</MenuItem>
								</TextField>
							</Grid>
							{this.state.E2 ?
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="select"
										name="helmet"
										label="Do you have a helmet?"
										value={this.state.helmet}
										onChange={this.handleChange}
									select>
										<MenuItem value="No">No</MenuItem>
										<MenuItem value="Yes">Yes</MenuItem>
									</TextField>

								</Grid>
							:
							""}

							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="select"
									name="smartPhone"
									label="Do you have a GPS enabled smart phone?"
									value={this.state.smartPhone}
									onChange={this.handleChange}
								select>
									<MenuItem value="Yes">Yes</MenuItem>
									<MenuItem value="No">No</MenuItem>
								</TextField>
							</Grid>

							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="guarantorName"
									label="Guarantor Name"
									name="guarantorName"
									autoComplete="guarantorName"
                  style={{borderRadius: 0}}
									helperText={errors.guarantorName}
									error={errors.guarantorName ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="guarantorNumber"
									label="Guarantor Number"
									name="guarantorNumber"
									autoComplete="guarantorNumber"
									helperText={errors.guarantorNumber}
									error={errors.guarantorNumber ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="guarantorJob"
									label="Guarantor Job"
									name="guarantorJob"
									autoComplete="guarantorJob"
                  style={{borderRadius: 0}}
									helperText={errors.guarantorJob}
									error={errors.guarantorJob ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="guarantorAddress"
									label="Guarantor Address"
									name="guarantorAddress"
									autoComplete="guarantorAddress"
									helperText={errors.guarantorAddress}
									error={errors.guarantorAddress ? true : false}
									onChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="select"
									name="agree"
									label="Do you agree to be smart, kind and polite"
									value={this.state.agree}
									onChange={this.handleChange}
								select>
									<MenuItem value="Yes">Yes</MenuItem>
									<MenuItem value="No">No</MenuItem>
								</TextField>
							</Grid>



						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={this.handleSubmit}
							disabled={loading ||
								!this.state.firstName ||
								!this.state.lastName ||
								!this.state.smartPhone ||
								!this.state.username ||
								!this.state.phoneNumber ||
								!this.state.vehiclePreference ||
								!this.state.DUI ||
								!this.state.guarantorJob ||
								!this.state.guarantorName ||
								!this.state.guarantorAddress ||
								!this.state.guarantorNumber ||
								!this.state.agree
							}
						>
							Next
							{loading && <CircularProgress size={30} className={classes.progess} />}
						</Button>

					</form>
				</div>
			</Container>
		);
	}
}

export default withAuth0(withStyles(styles)(signup));

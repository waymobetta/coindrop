import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from './SignUpStyles'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { ReactComponent as Checked } from '../assets/checked.svg'
import { ReactComponent as Unchecked } from '../assets/unchecked.svg'
import { Link as GatsbyLink } from 'gatsby'
import Link from '@material-ui/core/Link'
import { navigate } from "gatsby"
import ConfirmationModal from '../ConfirmationModal'

import { signup, sendResetPasswordLink, resetPassword } from '../../lib/api'
import { userLogin } from '../../state/actions/user'

const TOSLink = props => <GatsbyLink {...props} />

class SignUpForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			emailError: '',
			errorMessage: '',
			password: '',
			passwordConfirm: '',
			passwordError: '',
			successMessage: '',
			acceptTerms: false,
			forgotPasswordMode: false,
			resetPasswordCode: null,
			showConfirmationModal: false,
		}
	}

	componentDidUpdate(prevProps) {
		const { user } = this.props

		if (prevProps.user.status !== user.status && user.status === 'success') {
			navigate('/dashboard/home/')
		}
	}

	switchToSignIn = () => {
		this.props.switchToSignIn()
	}

	forgotPassword = () => {
		this.setState({
			forgotPasswordMode: true
		})
	}

	handleForgotPassword = async (event) => {
		event.preventDefault()
		this.clearErrors()
		const { email } = this.state

		try {
			await sendResetPasswordLink(email)
			this.setState({
				resetPasswordMode: true
			})
		} catch(err) {
			this.setState({
				errorMessage: err.message
			})
		}
	}

	handleResetPassword = async (event) => {
		event.preventDefault()
		this.clearErrors()

		const { email, resetPasswordCode, password:newPassword} = this.state

		try {
			await resetPassword(email, resetPasswordCode, newPassword)
			this.setState({
				successMessage: 'Password updated',
				resetPasswordMode: false,
				forgotPasswordMode: false,
				signUpMode: false,
			})
		} catch(err) {
			this.setState({
				errorMessage: err.message
			})
		}
	}

	handleLogin = async (event) => {
		event.preventDefault()
		this.clearErrors()

		const { email, password } = this.state
		const { dispatch } = this.props;
		try {
			const user = { email, password }
			dispatch(userLogin(user))

			this.setState({
				successMessage: 'Logging in...'
			})
		} catch(err) {
			if (err.code == 'UserNotFoundException') {
				this.setState({
					emailError: err.message
				})
				return
			}

			this.setState({
				errorMessage: err.message
			})
		}
	}

	handleSignup = async (event) => {
		event.preventDefault()
		this.clearErrors()

		const { email, password, passwordConfirm, acceptTerms } = this.state

		if (password !== passwordConfirm) {
			this.setState({
				passwordError: 'Passwords do not match'
			})
			return
		}

		if (!acceptTerms) {
			this.setState({
				errorMessage: 'Must agree to the terms'
			})
			return
		}

		try {
			this.setState({
				successMessage: 'Signing up...'
			})

			const result = await signup(email, password)

			if (result.cognitoAuthUserId) {
				this.toggleConfirmationModal(true)
				this.setState({
					successMessage: ''
				})
			}
		} catch(err) {
			this.setState({
				errorMessage: err.message,
				successMessage: ''
			})
		}
	}

	handleTermsClick = (event) => {
		this.setState({ acceptTerms: event.target.checked })
	}

	clearErrors = () => {
		this.setState({
			errorMessage: '',
			successMessage: '',
			emailError: '',
			passwordError: ''
		})
	}

	toggleConfirmationModal = (open) => {
		this.setState({ showConfirmationModal: open })

		if (!open) {
			navigate('/dashboard/home')
		}
	}

	render() {
		const { classes, signUpMode } = this.props
		const { forgotPasswordMode, resetPasswordMode, showConfirmationModal } = this.state
		const showPassword = true
		let modalTitle = 'Sign In'
		if (signUpMode) {
			modalTitle = 'Sign Up'
		}
		if (forgotPasswordMode) {
			modalTitle = 'Forgot Password'
		}
		if (resetPasswordMode) {
			modalTitle = 'Reset Password'
		}

		return (
			<main className={classes.main}>
				<CssBaseline />
				<Paper className={classes.paper} elevation={0}>
					<Typography
						component="h3"
						variant="h3"
						className={classes.signUpTitle}
					>
						{modalTitle}
					</Typography>
					{this.state.successMessage &&
						<div>
							{this.state.successMessage}
						</div>
					}
					{this.state.errorMessage &&
						<div>
							{this.state.errorMessage}
						</div>
					}
					{signUpMode ? (
						<form className={classes.form} onSubmit={event => this.handleSignup(event)}>
							<Grid
								container
								alignContent="space-between"
								justify="space-between"
								direction="column"
								alignItems="center"
								spacing={0}
							>
								<FormControl margin="normal" required fullWidth>
									<Input
										placeholder="Email Address"
										id="email"
										name="email"
										autoFocus
										onChange={event => this.setState({
											email: event.target.value
										})}
										classes={{
											underline: classes.cssUnderline,
										}}
									/>
									{this.state.emailError &&
										<FormHelperText id="component-error-text">
											{this.state.emailError}
										</FormHelperText>
									}
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<Input
										name="password"
										type="password"
										id="password"
										placeholder="Password"
										onChange={event => this.setState({
											password: event.target.value
										})}
										classes={{
											underline: classes.cssUnderline,
										}}
										endAdornment={
											<InputAdornment position="end">
												<IconButton aria-label="Toggle password visibility">
													{showPassword ? (
														<Visibility />
													) : (
														<VisibilityOff />
													)}
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>
								<FormControl
									margin="normal"
									required
									fullWidth
									error
								>
									<Input
										placeholder="Repeat Password"
										name="repeatPassword"
										type="password"
										id="repeatPassword"
										onChange={event => this.setState({
											passwordConfirm: event.target.value
										})}
										classes={{
											underline: classes.cssUnderline,
										}}
										endAdornment={
											<InputAdornment position="end">
												<IconButton aria-label="Toggle password visibility">
													{showPassword ? (
														<Visibility />
													) : (
														<VisibilityOff />
													)}
												</IconButton>
											</InputAdornment>
										}
									/>
									{this.state.passwordError &&
										<FormHelperText id="component-error-text">
											{this.state.passwordError}
										</FormHelperText>
									}
								</FormControl>

								<div className={classes.signupTOSLink}>
									<FormControlLabel
										control={
											<Checkbox
												color="primary"
												icon={
													<Unchecked color="#E8EAF4" />
												}
												checkedIcon={
													<Checked color="#5AE2B9" />
												}
												onChange={() => this.handleTermsClick(event)}
												value="checkedH"
											/>
										}
										label="I agree with the "
										className={classes.tosCheck}
									/>
									<Link
										component={TOSLink}
										className={classes.inlineLink}
										activeClassName="active"
										variant="body2"
										to="/dashboard/home/"
									>
										{' '}
										terms and conditions.
									</Link>
								</div>

								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="secondary"
									className={classes.submit}
								>
									Sign Up
								</Button>
								<Button
									size="medium"
									variant="text"
									color="primary"
									onClick={() => this.switchToSignIn()}
								>
									Sign In
								</Button>
							</Grid>
						</form>
					) : (

						resetPasswordMode ? (
							<form className={classes.form} onSubmit={event => this.handleResetPassword(event)}>
							<Grid
								container
								alignContent="space-between"
								justify="space-between"
								direction="column"
								alignItems="center"
								spacing={0}
							>
								<FormControl margin="normal" required fullWidth>
									<Input
										placeholder="Verification Code"
										id="code"
										name="code"
										onChange={event => this.setState({
											resetPasswordCode: event.target.value
										})}
										classes={{
											underline: classes.cssUnderline,
										}}
									/>
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<Input
										placeholder="New Password"
										id="newPassword"
										name="newPassword"
										autoComplete="newPassword"
										type="password"
										autoFocus
										onChange={event => this.setState({
											password: event.target.value
										})}
										classes={{
											underline: classes.cssUnderline,
										}}
									/>
								</FormControl>
								<Button
									type="submit"
									fullWidth
									className={classes.submit}
									variant="contained"
									color="secondary"
								>
									Reset Password
								</Button>
							</Grid>
							</form>
						) :

						forgotPasswordMode ? (
							<form className={classes.form} onSubmit={event => this.handleForgotPassword(event)}>
							<Grid
								container
								alignContent="space-between"
								justify="space-between"
								direction="column"
								alignItems="center"
								spacing={0}
							>
								<FormControl margin="normal" required fullWidth>
									<Input
										placeholder="Email Address"
										id="email"
										name="email"
										autoComplete="email"
										autoFocus
										onChange={event => this.setState({
											email: event.target.value
										})}
										classes={{
											underline: classes.cssUnderline,
										}}
									/>
									{this.state.emailError &&
										<FormHelperText id="component-error-text">
											{this.state.emailError}
										</FormHelperText>
									}
								</FormControl>
								<Button
									type="submit"
									fullWidth
									className={classes.submit}
									variant="contained"
									color="secondary"
								>
									Send reset password link
								</Button>
							</Grid>
							</form>
						) : (
						<form className={classes.form} onSubmit={event => this.handleLogin(event)}>
							<Grid
								container
								alignContent="space-between"
								justify="space-between"
								direction="column"
								alignItems="center"
								spacing={0}
							>
								<FormControl margin="normal" required fullWidth>
									<Input
										placeholder="Email Address"
										id="email"
										name="email"
										autoComplete="email"
										autoFocus
										onChange={event => this.setState({
											email: event.target.value
										})}
										classes={{
											underline: classes.cssUnderline,
										}}
									/>
									{this.state.emailError &&
										<FormHelperText id="component-error-text">
											{this.state.emailError}
										</FormHelperText>
									}
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<Input
										name="password"
										type="password"
										id="password"
										placeholder="Password"
										onChange={event => this.setState({
											password: event.target.value
										})}
										classes={{
											underline: classes.cssUnderline,
										}}
										endAdornment={
											<InputAdornment position="end">
												<IconButton aria-label="Toggle password visibility">
													{showPassword ? (
														<Visibility />
													) : (
														<VisibilityOff />
													)}
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>

								<Button
									type="submit"
									fullWidth
									className={classes.submit}
									variant="contained"
									color="secondary"
								>
									Sign In
								</Button>
								<Button
									size="medium"
									variant="text"
									onClick={() => this.forgotPassword()}
								>
									Forgot Password?
								</Button>
							</Grid>
						</form>
					))}
				</Paper>
				<ConfirmationModal toggle={this.toggleConfirmationModal} open={showConfirmationModal} />
			</main>
		)
	}
}

SignUpForm.propTypes = {
	classes: PropTypes.object.isRequired,
	closeSignUp: PropTypes.func,
	switchToSignIn: PropTypes.func,
	signUpMode: PropTypes.bool,
}


/* istanbul ignore next */
function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps)(withStyles(styles)(SignUpForm));

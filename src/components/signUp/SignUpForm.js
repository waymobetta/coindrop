import React from 'react'
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

import { login } from '../../lib/api'

const TOSLink = props => <GatsbyLink {...props} />

class SignUpForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			emailError: '',
			errorMessage: '',
			successMessage: '',
			password: '',
			passwordConfirm: '',
		}

		this.switchToSignIn = this.switchToSignIn.bind(this)
	}
	switchToSignIn() {
		this.props.switchToSignIn()
	}

	async handleLogin(event) {
		event.preventDefault()
		this.clearErrors()

		const { email, password } = this.state
		try {
			await login(email, password)

			this.setState({
				successMessage: 'Logging in...'
			})

			navigate('/dashboard/dashboard')
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

	clearErrors() {
		this.setState({
			errorMessage: '',
			successMessage: '',
			emailError: ''
		})
	}

	render() {
		const { classes, signUpMode } = this.props
		const showPassword = true
		const modalTitle = signUpMode ? 'Sign Up' : 'Sign In'

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
						<form className={classes.form}>
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
										type="repeatPassword"
										id="repeatPassword"
										onChange={event => this.setState({
											passwordConfirm: event.target.value
										})}
										classes={{
											underline: classes.cssUnderline,
										}}
									/>
									<FormHelperText id="component-error-text">
										Password does not match
									</FormHelperText>
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
										to="dashboard/dashboard/"
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
									onClick={this.switchToSignIn}
								>
									Sign In
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
									onClick={this.switchToSignIn}
								>
									Forgot Password?
								</Button>
							</Grid>
						</form>
					)}
				</Paper>
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

export default withStyles(styles)(SignUpForm)

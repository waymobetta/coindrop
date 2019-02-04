import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from './SignUpStyles'
import ButtonDark from '../ButtonDark'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormHelperText from '@material-ui/core/FormHelperText'

class SignUpForm extends React.Component {
	constructor(props) {
		super(props)
		this.switchToSignIn = this.switchToSignIn.bind(this)
	}
	switchToSignIn() {
		this.props.closeSignUp()
	}
	render() {
		const { classes } = this.props
		const showPassword = true

		return (
			<main className={classes.main}>
				<CssBaseline />
				<Paper className={classes.paper} elevation={0}>
					<Typography component="h1" variant="h4">
						Sign Up
					</Typography>
					<form className={classes.form}>
						<FormControl margin="normal" required fullWidth>
							<Input
								placeholder="Email Address"
								id="email"
								name="email"
								autoComplete="email"
								autoFocus
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
							<FormHelperText id="component-error-text">
								Email already taken
							</FormHelperText>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<Input
								name="password"
								type="password"
								id="password"
								placeholder="Password"
								classes={{
									underline: classes.cssUnderline,
								}}
							/>
						</FormControl>
						<FormControl margin="normal" required fullWidth error>
							<Input
								placeholder="Repeat Password"
								name="repeatPassword"
								type="repeatPassword"
								id="repeatPassword"
								classes={{
									underline: classes.cssUnderline,
								}}
							/>
							<FormHelperText id="component-error-text">
								Password does not match
							</FormHelperText>
						</FormControl>
						<FormControlLabel
							control={
								<Checkbox value="remember" color="primary" />
							}
							label="Remember me"
						/>
						<ButtonDark
							type="submit"
							fullWidth
							className={classes.submit}
						>
							Sign Up
						</ButtonDark>
						<Button
							size="medium"
							variant="text"
							onClick={this.switchToSignIn}
						>
							Sign In
						</Button>
					</form>
				</Paper>
			</main>
		)
	}
}

SignUpForm.propTypes = {
	classes: PropTypes.object.isRequired,
	closeSignUp: PropTypes.func,
}

export default withStyles(styles)(SignUpForm)

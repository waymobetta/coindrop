import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import SignUpForm from './SignUpForm'
import styles from './SignUpStyles'
import IconButton from '@material-ui/core/IconButton'
import { ReactComponent as CommentBubles } from '../assets/comment_bubbles.svg'

function getModalStyle() {
	const top = 50
	const left = 50

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	}
}

class SignUp extends React.Component {
	constructor(props) {
		super(props)
		this.closeButton = this.closeButton.bind(this)
	}
	closeButton() {
		this.props.onClose()
	}
	render() {
		const { classes } = this.props

		return (
			<>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					disableBackdropClick={true}
					open={this.props.open}
					onClose={this.props.onClose}
				>
					<div style={getModalStyle()} className={classes.modalPaper}>
						<SignUpForm closeSignUp={this.closeButton} />
						<IconButton
							className={classes.modalCloseButton}
							aria-label="Delete"
							onClick={this.closeButton}
						>
							<CommentBubles />
						</IconButton>
					</div>
				</Modal>
			</>
		)
	}
}

SignUp.propTypes = {
	classes: PropTypes.object.isRequired,
	open: PropTypes.bool,
	onClose: PropTypes.func,
	handleSignUpClose: PropTypes.func,
}

export default withStyles(styles)(SignUp)

import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { ReactComponent as Reddit } from '../assets/reddit.svg'
import CheckIcon from '@material-ui/icons/Check'
import Plus from '@material-ui/icons/AddCircleOutlineOutlined'

const styles = theme => ({
	root: {
		backgroundColor: '#FFF',
		borderRadius: theme.borderRadius,
		color: '#3C4249',
		padding: '16px 36px',
		textTransform: 'capitalize',
		width: '100%',
		marginBottom: 10,
		border: '1px solid #FFF',
		boxShadow:
			'0 12px 22px 0 rgba(99,108,123,0.1), 0 -12px 22px 0 rgba(99,108,123,0.05)',
	},
	label: {
		textAlign: 'left',
		lineHeight: '36px',
		verticalAlign: 'middle',
		fontWeight: 'normal',
		display: 'flex',
		justifyContent: 'space-between',
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
		width: 36,
		height: 36,
		float: 'left',
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
		float: 'right',
		fill: '#CA34FF',
		width: 36,
		height: 36,
	},
})

class DashAccountItem extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { classes, children, set, ...props } = this.props
		return (
			<Button
				disableRipple
				classes={{
					root: classes.root,
					label: classes.label,
				}}
				{...props}
			>
				<Reddit className={classes.leftIcon} />
				{children}
				{set ? (
					<CheckIcon className={classes.rightIcon} />
				) : (
					<Plus className={classes.rightIcon} />
				)}
			</Button>
		)
	}
}

DashAccountItem.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
	set: PropTypes.bool,
}

export default withStyles(styles)(DashAccountItem)

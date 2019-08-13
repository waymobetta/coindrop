import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { ReactComponent as PlusCircle } from '../../components/assets/plusCircle.svg'
import { ReactComponent as CheckLine } from '../../components/assets/checkLine.svg'

const styles = theme => ({
	root: {
		backgroundColor: '#FFF',
		borderRadius: theme.borderRadius,
		width: '90%',
		color: '#3C4249',
		padding: '16px 36px',
		textTransform: 'capitalize',
		marginBottom: 15,
		border: '1px solid #FFF',
		boxShadow: '0 -8px 18px 0 rgba(99,108,123,0.075)',
		'&:hover': {
			border: '1px solid #FFF',
			backgroundColor: '#FFF',
			boxShadow: '0 -12px 18px 0 rgba(99,108,123,0.1)',
		},
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			padding: '16px 16px',
		},
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
		color: '#CA34FF',
		width: 24,
		height: 24,
	},
})

class DashAccountItem extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { classes, children, set, render, ...rest } = this.props
		return (
			<Button
				disableRipple
				classes={{
					root: classes.root,
					label: classes.label,
				}}
				{...rest}
			>
				{render}
				{children}
				{set ? (
					<CheckLine className={classes.rightIcon} />
				) : (
						<PlusCircle className={classes.rightIcon} />
					)}
			</Button>
		)
	}
}

DashAccountItem.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
	set: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}

export default withStyles(styles)(DashAccountItem)

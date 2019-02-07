import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import ArrowForward from '@material-ui/icons/ArrowForward'
import { ReactComponent as Reddit } from './assets/reddit.svg'

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
		display: 'block',
		lineHeight: '36px',
		verticalAlign: 'middle',
		fontWeight: 'normal',
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

function AccountButton(props) {
	const { classes } = props
	return (
		<Button
			classes={{
				root: props.classes.root,
				label: props.classes.label,
			}}
			{...props}
		>
			<Reddit className={classes.leftIcon} />
			{props.children}
			<ArrowForward className={classes.rightIcon} />
		</Button>
	)
}

export default withStyles(styles)(AccountButton)

import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import ArrowForward from '@material-ui/icons/ArrowForward'

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
	},
	label: {
		textAlign: 'left',
		display: 'block',
		lineHeight: '36px',
		verticalAlign: 'middle',
		fontWeight: 'normal',
		fontSize: '14px',
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
	const { classes, ...rest } = props
	return (
		<Button
			classes={{
				root: classes.root,
				label: classes.label,
			}}
			{...rest}
		>
			{props.render}
			{props.children}
			<ArrowForward className={classes.rightIcon} />
		</Button>
	)
}

export default withStyles(styles)(AccountButton)

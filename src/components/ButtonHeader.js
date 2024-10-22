import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: theme.borderRadius,
		color: 'white',
		padding: '6px 20px',
		margin: '0px 0px 0px 10px',
		textTransform: 'capitalize',
		fontSize: '16px',
		fontWeight: 700,
		[theme.breakpoints.down('xs')]: {
			minWidth: 'auto',
			padding: '6px 6px',
		},
	},
})

function ButtonHeader(props) {
	return (
		<Button
			classes={{
				root: props.classes.root,
			}}
			{...props}
		>
			{props.children}
		</Button>
	)
}

export default withStyles(styles)(ButtonHeader)

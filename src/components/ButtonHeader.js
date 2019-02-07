import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: theme.borderRadius,
		color: 'white',
		padding: '6px 20px',
		margin: '0px 10px',
		textTransform: 'capitalize',
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

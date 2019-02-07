import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		backgroundColor: 'transparent',
		borderRadius: theme.borderRadius,
		color: 'white',
		padding: '16px 36px',
		textTransform: 'capitalize',
		border: '1px solid #ccc',
	},
})

function ButtonOutlineDark(props) {
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

export default withStyles(styles)(ButtonOutlineDark)

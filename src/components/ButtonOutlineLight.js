import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		backgroundColor: '#FFF',
		borderRadius: theme.borderRadius,
		color: '#D74EFF',
		padding: '14px 36px',
		textTransform: 'capitalize',
		border: '2px solid #E390FF',
		maxWidth: 200,
	},
})

function ButtonOutlineLight(props) {
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

export default withStyles(styles)(ButtonOutlineLight)

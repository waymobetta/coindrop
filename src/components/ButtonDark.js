import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		background: 'linear-gradient(45deg, #BF41FF 30%, #572FFF 90%)',
		backgroundColor: '#572FFF',
		borderRadius: theme.borderRadius,
		color: 'white',
		padding: '16px 36px',
		textTransform: 'capitalize',
	},
})

function ButtonDark(props) {
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

export default withStyles(styles)(ButtonDark)

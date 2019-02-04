import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		background: 'linear-gradient(45deg, #B53FFF 30%, #E390FF 90%)',
		backgroundColor: '#E390FF',
		borderRadius: theme.borderRadius,
		color: 'white',
		padding: '16px 36px',
		textTransform: 'capitalize',
	},
})

function ButtonLight(props) {
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

export default withStyles(styles)(ButtonLight)

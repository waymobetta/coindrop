const styles = theme => ({
	modalPaper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		outline: 'none',
		borderRadius: 56,
	},
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,

		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'transparent',

		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit *
			3}px ${theme.spacing.unit * 3}px`,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
	cssUnderline: {
		'&:before': {
			borderBottomColor: '#ccc',
			borderWidth: 1,
		},
		'&:after': {
			borderBottomColor: 'red',
			borderWidth: 1,
		},
		'&:hover': {
			borderBottomColor: '#ccc',
			borderWidth: 1,
		},
	},
	modalCloseButton: {
		top: -20,
		right: -20,
		position: 'absolute',
	},
})

export default styles

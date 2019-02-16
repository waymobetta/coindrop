const styles = theme => ({
	modalPaper: {
		position: 'absolute',
		[theme.breakpoints.up('sm')]: {
			width: 410,
		},
		[theme.breakpoints.down('xs')]: {
			width: 340,
		},
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		outline: 'none',
		borderRadius: theme.modalBorderRadius,
	},
	main: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		display: 'flex',
		flex: 1,
		justifyContent: 'space-around',
		[theme.breakpoints.up('sm')]: {
			marginLeft: 'auto',
			marginRight: 'auto',
			minHeight: 400,
		},
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		backgroundColor: 'transparent',
		width: '100%',
		padding: '50px 48px 50px 48px',
		[theme.breakpoints.down('xs')]: {
			padding: '30px 15px 20px 15px',
		},
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
	signupTOSLink: {
		display: 'flex',
		justify: 'flex-start',
	},
	inlineLink: {
		textTransform: 'capitalize',
	},
	tosCheck: {
		marginRight: 0,
	},
	signUpTitle: {
		marginBottom: 70,
	},
})

export default styles

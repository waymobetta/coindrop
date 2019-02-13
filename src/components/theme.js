import { createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'

const rawTheme = createMuiTheme({
	palette: {
		primary: {
			ligth: '#FFF',
			main: '#28282a',
			dark: '#1e1e1f',
		},
		secondary: {
			light: '#fff5f8',
			main: '#E864FF',
			dark: '#e62958',
		},
		warning: {
			main: '#ffc071',
			dark: '#ffb25e',
		},
		error: {
			xLight: red[50],
			main: red[500],
			dark: red[700],
		},
		success: {
			xLight: green[50],
			dark: green[700],
		},
	},
	borderRadius: 34,
	maxWidth: '1100px',
	modalBorderRadius: 56,
	boxShadow: {
		boxShadow:
			'0 12px 22px 0 rgba(99,108,123,0.1), 0 -12px 22px 0 rgba(99,108,123,0.05)',
	},
	boxTitle: {
		fontSize: 16,
		color: '#92979D',
		paddingBottom: 5,
	},
	typography: {
		fontFamily: "'Work Sans', sans-serif",
		fontSize: 14,
		fontWeightLight: 300, // Work Sans
		fontWeightRegular: 400, // Work Sans
		fontWeightMedium: 700, // Roboto Condensed
		fontFamilySecondary: "'Roboto Condensed', sans-serif",
		useNextVariants: true,
	},
	props: {
		// Name of the component ⚛️
		MuiButtonBase: {
			// The properties to apply
			disableRipple: true, // No more ripple, on the whole application 💣!
		},
	},
	overrides: {
		MuiStepConnector: {
			line: {
				display: 'none',
			},
		},
		MuiTypography: {
			display3: {
				fontSize: 22,
			},
		},
		MuiInput: {
			underline: {
				'&&&&:hover:before': {
					borderBottom: '1px solid #CCC',
				},
				'&:after': {
					borderBottom: `1px solid #572fff`,
				},
			},
		},
		MuiButton: {
			// Name of the component ⚛️ / style sheet
			outlinedPrimary: {
				// Name of the rule
				backgroundColor: '#FFF',
				borderRadius: 30,
				fontSize: 16,
				minWidth: 180,
				color: '#D74EFF',
				textTransform: 'capitalize',
				border: '2px solid #E390FF',
				padding: '10px 25px',
				'&:hover': {
					border: '2px solid #E390FF',
				},
			},
			outlinedSecondary: {
				// Name of the rule
				color: 'white', // Some CSS
				border: '2px solid #FFF',
				padding: '10px 25px',
				borderRadius: 30,
				'&:hover': {
					border: '2px solid #FFF',
				},
			},
			textPrimary: {
				color: '#E66BFF',
			},
		},
	},
})

const fontHeader = {
	color: rawTheme.palette.text.primary,
	fontWeight: rawTheme.typography.fontWeightMedium,
	fontFamily: rawTheme.typography.fontFamilySecondary,
}

const theme = {
	...rawTheme,
	palette: {
		...rawTheme.palette,
		background: {
			...rawTheme.palette.background,
			default: rawTheme.palette.common.white,
			placeholder: grey[200],
		},
	},
	typography: {
		...rawTheme.typography,
		fontHeader,
		h1: {
			...rawTheme.typography.h1,
			...fontHeader,
			letterSpacing: 0,
			fontSize: 60,
		},
		h2: {
			...rawTheme.typography.h2,
			...fontHeader,
			fontSize: 45,
		},
		h3: {
			...rawTheme.typography.h3,
			...fontHeader,
			fontSize: 42,
		},
		h4: {
			...rawTheme.typography.h4,
			...fontHeader,
			fontSize: 42,
		},
		h5: {
			...rawTheme.typography.h5,
			fontSize: 20,
			fontWeight: rawTheme.typography.fontWeightLight,
		},
		h6: {
			...rawTheme.typography.h6,
			...fontHeader,
			fontSize: 22,
		},
		subtitle1: {
			...rawTheme.typography.subtitle1,
			fontSize: 16,
		},
		body1: {
			...rawTheme.typography.body2,
			fontWeight: rawTheme.typography.fontWeightRegular,
			fontSize: 16,
		},
		body2: {
			...rawTheme.typography.body1,
			fontSize: 14,
		},
	},
}

export default theme

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
			contrastText: '#fff',
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
		text: {
			primary: '#4D4D4D',
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
		fontFamily: "'Assistant', sans-serif",
		fontSize: 14,
		fontWeightLight: 300, // Work Sans
		fontWeightRegular: 400, // Work Sans
		fontWeightMedium: 600, // Roboto Condensed
		fontWeightBold: 800, // Roboto Condensed
		fontFamilySecondary: "'Assistant', sans-serif",
		useNextVariants: true,
	},
	props: {
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
			h1: {
				fontWeight: 700,
				letterSpacing: '0.56px',
			},
			h2: {
				fontWeight: 700,
				letterSpacing: '0.56px',
			},
			display3: {
				fontSize: 22,
			},
			body1: {
				letterSpacing: '0.27px',
				lineHeight: '25px',
				color: '#4D4D4D',
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
		MuiFab: {
			primary: {
				background: 'linear-gradient(45deg, #B53FFF 30%, #E390FF 90%)',
				backgroundColor: '#E390FF',
			},
		},
		MuiIconButton: {
			colorSecondary: {
				'&:hover': {
					backgroundColor: 'transparent',
				},
			},
		},
		MuiListItemText: {
			inset: {
				'&:first-child': {
					paddingLeft: 15,
				},
			},
		},
		MuiButton: {
			containedPrimary: {
				background: 'linear-gradient(45deg, #B53FFF 30%, #E390FF 90%)',
				backgroundColor: '#E390FF',
				borderRadius: 30,
				fontSize: 16,
				minWidth: 180,
				color: 'white',
				padding: '16px 36px',
				textTransform: 'capitalize',
				boxShadow: 'none',
				fontWeight: '700',
				letterSpacing: '0.53px',
			},
			containedSecondary: {
				background: 'linear-gradient(45deg, #B43FFF 30%, #7A35FF 90%)',
				backgroundColor: '#572FFF',
				borderRadius: 30,
				fontSize: 16,
				minWidth: 180,
				color: 'white',
				padding: '16px 36px',
				textTransform: 'capitalize',
				boxShadow: '-4px 5px 26px 0 #CFB0FF',
				fontWeight: '700',
			},
			outlinedPrimary: {
				backgroundColor: '#FFF',
				borderRadius: 30,
				fontSize: 16,
				minWidth: 180,
				color: '#D74EFF',
				textTransform: 'capitalize',
				border: '2px solid #D74EFF',
				padding: '10px 25px',
				boxShadow: '-3px 5px 10px 0 #F6D9FF',
				'&:hover': {
					border: '2px solid #D74EFF',
					backgroundColor: '#FFF',
				},
			},
			outlinedSecondary: {
				color: 'white',
				border: '2px solid #FFF',
				padding: '10px 25px',
				borderRadius: 30,
				minWidth: 180,
				'&:hover': {
					border: '2px solid #FFF',
				},
			},
			textPrimary: {
				color: '#555555',
				fontWeight: 'bold',
				textDecoration: 'none',
				'&:hover': {
					backgroundColor: 'transparent',
					color: '#666666',
				},
			},
			textSecondary: {
				color: '#E66BFF',
				fontWeight: 'bold',
				letterSpacing: '2.4px',
				textDecoration: 'none',
				'&:hover': {
					backgroundColor: 'transparent',
				},
			},
			sizeSmall: {
				fontSize: 14,
			},

			sizeLarge: {
				fontSize: 24,
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
			fontSize: 45,
		},
		h2: {
			...rawTheme.typography.h2,
			...fontHeader,
			fontSize: 32,
		},
		h3: {
			...rawTheme.typography.h3,
			...fontHeader,
			fontSize: 24,
		},
		h4: {
			...rawTheme.typography.h4,
			...fontHeader,
			fontSize: 18,
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
		subtitle2: {
			...rawTheme.typography.subtitle1,
			fontSize: 18,
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

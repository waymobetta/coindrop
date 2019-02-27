import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import Hidden from '@material-ui/core/Hidden'
import Badge from '@material-ui/core/Badge'
import ContributionTabContainer from './contributionTabContainer'

const styles = theme => ({
	paper: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		position: 'relative',
		borderRadius: 30,
		minHeight: 200,
		padding: 10,
		...theme.boxShadow,
		[theme.breakpoints.down('xs')]: {
			padding: '30px 30px',
		},
	},
	boxTitle: {
		...theme.boxTitle,
	},
	active: {
		color: 'red',
	},
	contributionTabs: {
		borderBottom: '1px solid #ccc',
		width: 'calc(100% - 140px)',
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '140px',
			width: '100%',
		},
	},
	dotBadge: {
		margin: '10px 0px',
		color: '#C8C8C8',
		[theme.breakpoints.down('xs')]: {
			margin: '5px 0px',
		},
	},
	dot: {
		left: 0,
		right: 'auto',
		backgroundColor: '#CA64FF',
	},
	button: {
		textTransform: 'capitalize',
		color: '#C8C8C8',
		'&.active': {
			color: '#656565',
		},
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'flex-start',
		},
	},
	earningBox: {
		position: 'absolute',
		width: 160,
		height: 125,
		background: 'linear-gradient(45deg, #B53FFF 30%, #E390FF 90%)',
		backgroundColor: '#E390FF',
		borderRadius: 30,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '25px 30px',
		zIndex: 9,
		[theme.breakpoints.up('sm')]: {
			top: -30,
			right: -30,
		},
		[theme.breakpoints.down('xs')]: {
			top: 30,
			right: 30,
		},
	},
	number: {
		fontSize: 36,
		color: 'white',
		fontWeight: 800,
	},
	term: {
		fontSize: 16,
		color: 'white',
	},
})

class DashContributions extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 0,
		}
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}

	render() {
		const { classes } = this.props
		const { value } = this.state
		return (
			<Grid item xs={12} sm={10} md={10} lg={6}>
				<Hidden xsDown>
					<Typography
						className={classes.boxTitle}
						variant="subtitle1"
					>
						Contributions
					</Typography>
				</Hidden>
				<Paper className={classes.paper}>
					<div className={classes.contributionTabs}>
						<Badge
							color="primary"
							className={classes.dotBadge}
							classes={{ badge: classes.dot }}
							variant="dot"
							invisible={value !== 0}
						>
							<Button
								size="small"
								variant="text"
								className={classNames(
									classes.button,
									value === 0 ? 'active' : ''
								)}
								onClick={e => this.handleChange(e, 0)}
							>
								Today
							</Button>
						</Badge>
						<Badge
							color="primary"
							className={classes.dotBadge}
							classes={{ badge: classes.dot }}
							variant="dot"
							invisible={value !== 1}
						>
							<Button
								size="small"
								variant="text"
								className={classNames(
									classes.button,
									value === 1 ? 'active' : ''
								)}
								onClick={e => this.handleChange(e, 1)}
							>
								Monthly
							</Button>
						</Badge>
						<Badge
							color="primary"
							className={classes.dotBadge}
							classes={{ badge: classes.dot }}
							variant="dot"
							invisible={value !== 2}
						>
							<Button
								size="small"
								variant="text"
								className={classNames(
									classes.button,
									value === 2 ? 'active' : ''
								)}
								onClick={e => this.handleChange(e, 2)}
							>
								Total
							</Button>
						</Badge>
						<div className={classes.earningBox}>
							<span className={classes.number}>1</span>
							<span className={classes.term}>Monthly</span>
						</div>
					</div>

					{value === 0 && (
						<ContributionTabContainer>
							Claimed $5 for high reputation
						</ContributionTabContainer>
					)}
					{value === 1 && (
						<ContributionTabContainer>
							Monthly
						</ContributionTabContainer>
					)}
					{value === 2 && (
						<ContributionTabContainer>
							Total
						</ContributionTabContainer>
					)}
				</Paper>
			</Grid>
		)
	}
}

DashContributions.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DashContributions)

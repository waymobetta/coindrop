import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import DashAccountItem from '../../components/dashboard/dashAccountItem'
import theme from '../../components/theme'
import { ReactComponent as Reddit } from '../../components/assets/reddit.svg'
import { ReactComponent as StackOverflow } from '../../components/assets/stackOverflow.svg'
import classNames from 'classnames'

const styles = () => ({
	accountBoxPaper: {
		position: 'relative',
		borderRadius: 33,
		flexGrow: 1,
		...theme.boxShadow,
		padding: theme.spacing.unit * 3,
		[theme.breakpoints.down('sm')]: {
			minHeight: 300,
		},
	},
	fabEdit: {
		background: 'linear-gradient(45deg, #BF41FF 30%, #572FFF 90%)',
		backgroundColor: '#572FFF',
		right: -30,
		top: 50,
		position: 'absolute',
	},
	currentValue: {
		flexGrow: 1,
		textAlign: 'left',
		fontSize: '16px',
		fontWeight: '700',
	},
	accountType: {
		flexGrow: 2,
		maxWidth: '300px',
		fontSize: '14px',
	},
	boxTitle: {
		...theme.boxTitle,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			fontSize: '26px',
			color: '#363C44',
			marginBottom: 30,
		},
	},
	redditIcon: {
		backgroundColor: '#8C8C8C',
		borderRadius: '40px',
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
		float: 'right',
		fill: '#CA34FF',
		width: 36,
		height: 36,
	},
})

class Accounts extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { classes } = this.props
		return (
			<Layout>
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
				<Hidden mdUp>
					<Typography
						variant="h2"
						component="h2"
						className={classes.boxTitle}
					>
						Accounts
					</Typography>
				</Hidden>
				<Grid item xs={12} sm={10} spacing={40}>
					<Hidden smDown>
						<Typography
							variant="h6"
							component="h6"
							className={classes.boxTitle}
						>
							Accounts
						</Typography>
					</Hidden>
					<Paper className={classes.accountBoxPaper}>
						<DashAccountItem
							variant="outlined"
							size="large"
							color="primary"
							render={
								<Reddit
									className={classNames(
										classes.leftIcon,
										classes.redditIcon
									)}
									color="#FFF"
								/>
							}
							set
						>
							<span className={classes.accountType}>Reddit</span>

							<span className={classes.currentValue}>
								r/hunter2727
							</span>
						</DashAccountItem>
						<DashAccountItem
							variant="outlined"
							size="large"
							color="primary"
							render={
								<StackOverflow
									className={classes.leftIcon}
									color="#8C8C8C"
								/>
							}
						>
							<span className={classes.accountType}>
								Stack Overflow
							</span>
							<span className={classes.currentValue}>
								UserID:
							</span>
						</DashAccountItem>
					</Paper>
				</Grid>
			</Layout>
		)
	}
}

Accounts.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Accounts)

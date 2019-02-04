import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import Hidden from '@material-ui/core/Hidden'

const styles = theme => ({
	paper: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	active: {
		color: 'red',
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
			<Grid item xs={12} sm={6}>
				<Hidden smDown>
					<Typography variant="h5" component="h3">
						Contributions
					</Typography>
				</Hidden>
				<Paper className={classes.paper}>
					<div>
						<Button
							size="small"
							className={classNames(
								classes.margin,
								value === 0 ? 'active' : ''
							)}
							onClick={e => this.handleChange(e, 0)}
						>
							Today
						</Button>
						<Button
							size="medium"
							className={classNames(
								classes.margin,
								value === 1 ? 'active' : ''
							)}
							onClick={e => this.handleChange(e, 1)}
						>
							Monthly
						</Button>
						<Button
							size="large"
							className={classNames(
								classes.margin,
								value === 2 ? 'active' : ''
							)}
							onClick={e => this.handleChange(e, 2)}
						>
							Total
						</Button>
					</div>

					{value === 0 && <TabContainer>Today Ipsum</TabContainer>}
					{value === 1 && <TabContainer>Monthly</TabContainer>}
					{value === 2 && <TabContainer>Total</TabContainer>}
				</Paper>
			</Grid>
		)
	}
}

DashContributions.propTypes = {
	classes: PropTypes.object.isRequired,
}

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	)
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
}

export default withStyles(styles)(DashContributions)

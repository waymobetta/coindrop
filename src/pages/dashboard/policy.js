import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import ScrollspyNav from 'react-scrollspy-nav'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import theme from '../../components/theme'

const styles = () => ({
	root: {
		display: 'flex',
	},
	legalBoxPaper: {
		position: 'relative',
		borderRadius: 33,
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		...theme.boxShadow,
	},
	fixed: {
		position: 'fixed',
	},
	legalMainGrid: {
		marginLeft: 200,
		marginTop: 30,
	},
})

class Policy extends React.Component {
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
				<div>
					<Grid
						container
						spacing={40}
						className={classes.root}
						justify="flex-start"
					>
						<Grid item xs={12} sm={3} className={classes.fixed}>
							<Typography>Legal</Typography>
							<Paper className={classes.legalBoxPaper}>
								<ScrollspyNav
									scrollTargetIds={[
										'section_1',
										'section_2',
										'section_3',
									]}
									activeNavClass="is-active"
									scrollDuration="1000"
									headerBackground="true"
								>
									<ul>
										<li>
											<a href="/">
												<span>Home</span>
											</a>
										</li>
										<li>
											<a href="#section_1">
												<span>Section 1</span>
											</a>
										</li>
										<li>
											<a href="#section_2">
												<span>Section 2</span>
											</a>
										</li>
										<li>
											<a href="#section_3">
												<span>Section 3</span>
											</a>
										</li>
									</ul>
								</ScrollspyNav>
							</Paper>
						</Grid>
						<Grid
							item
							xs={12}
							sm={9}
							className={classes.legalMainGrid}
						>
							<Paper className={classes.legalBoxPaper}>
								<div style={{ height: '400px' }}>
									<span>Welcome!</span>
								</div>
								<div id="section_1" style={{ height: '500px' }}>
									<span>Section 1</span>
								</div>
								<div id="section_2" style={{ height: '500px' }}>
									<span>Section 2</span>
								</div>
								<div id="section_3" style={{ height: '500px' }}>
									<span>Section 3</span>
								</div>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</Layout>
		)
	}
}

Policy.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string,
}

export default compose(
	withStyles(styles, { withTheme: true }),
	withWidth()
)(Policy)

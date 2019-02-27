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
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import classNames from 'classnames'

const styles = () => ({
	root: {
		display: 'flex',
	},
	legalBoxNavigation: {
		position: 'relative',
		borderRadius: 33,
		flexGrow: 1,
		padding: 30,
		...theme.boxShadow,
		width: '220px',
	},
	legalBoxPaper: {
		position: 'relative',
		borderRadius: 33,
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		backgroundColor: 'transparent',
		...theme.boxShadow,
		boxShadow: 'none',
	},
	fixed: {
		position: 'fixed',
	},
	legalMainGrid: {
		marginLeft: 230,
		marginTop: 30,
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
	mainLink: {
		fontWeight: '700',
		color: '#979797',
		fontSize: '15px',
	},
	subLink: {
		fontSize: '13px',
		fontWeight: '700',
		color: '#979797',
	},
	tosListItem: {
		padding: '3px',
	},
	insetPadding: {
		paddingLeft: '10px',
	},
})

function generate(classes) {
	return [
		{
			name: 'Section 1',
			url: 'section_1',
		},
		{
			name: 'Section 1.1',
			url: 'section_1_1',
			inset: true,
		},
		{
			name: 'Section 1.2',
			url: 'section_1_2',
			inset: true,
		},
		{
			name: 'Section 1.3',
			url: 'section_1_3',
			inset: true,
		},
		{
			name: 'Section 2',
			url: 'section_2',
		},
		{
			name: 'Section 3',
			url: 'section_3',
		},
	].map((it, index) => (
		<a key={index} href={`#${it.url}`}>
			<ListItem classes={{ root: classes.tosListItem }}>
				<ListItemText
					primary={it.name}
					inset={it.inset ? it.inset : false}
					classes={{
						primary: classNames(
							it.inset ? classes.subLink : classes.mainLink
						),
					}}
				/>
			</ListItem>
		</a>
	))
}

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
				<Hidden mdUp>
					<Typography
						variant="h2"
						component="h2"
						className={classes.boxTitle}
					>
						Accounts
					</Typography>
				</Hidden>
				<div>
					<Grid
						container
						className={classes.root}
						justify="flex-start"
					>
						<Grid item xs={12} sm={2} className={classes.fixed}>
							<Hidden smDown>
								<Typography
									variant="h6"
									component="h6"
									className={classes.boxTitle}
								>
									Legal
								</Typography>
							</Hidden>
							<Paper className={classes.legalBoxNavigation}>
								<ScrollspyNav
									scrollTargetIds={[
										'section_1',
										'section_1_1',
										'section_1_2',
										'section_1_3',
										'section_2',
										'section_3',
									]}
									activeNavClass={'isActiveTos'}
									scrollDuration="1000"
									headerBackground="true"
								>
									<List>{generate(classes)}</List>
								</ScrollspyNav>
							</Paper>
						</Grid>
						<Grid
							item
							xs={12}
							sm={10}
							className={classes.legalMainGrid}
						>
							<Paper className={classes.legalBoxPaper}>
								<div>
									<span>Welcome!</span>
								</div>
								<div id="section_1">
									<span>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the standard dummy text
										ever since the 1500s, when an unknown
										printer took a galley of type and
										scrambled it to make a type specimen
										book. It has survived not only five
										centuries, but also the leap into
										electronic typesetting, remaining
										essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum. Lorem Ipsum is simply dummy
										text of the printing and typesetting
										industry. Lorem Ipsum has been the
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type specimen book. It has survived
										not only five centuries, but also the
										leap into electronic typesetting,
										remaining essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum. Lorem Ipsum is simply dummy
										text of the printing and typesetting
										industry. Lorem Ipsum has been the
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type specimen book. It has survived
										not only five centuries, but also the
										leap into electronic typesetting,
										remaining essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum. Lorem Ipsum is simply dummy
										text of the printing and typesetting
										industry. Lorem Ipsum has been the
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type specimen book. It has survived
										not only five centuries, but also the
										leap into electronic typesetting,
										remaining essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum.
									</span>
									<div id="section_1_1">
										<h3>section_1_1</h3>
										<span>
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Lorem Ipsum has been the
											standard dummy text ever since the
											1500s, when an unknown printer took
											a galley of type and scrambled it to
											make a type specimen book. It has
											survived not only five centuries,
											but also the leap into electronic
											typesetting, remaining essentially
											unchanged. It was popularised in the
											1960s with the release of Letraset
											sheets containing Lorem Ipsum
											passages, and more recently with
											desktop publishing software like
											Aldus PageMaker including versions
											of Lorem Ipsum. Lorem Ipsum is
											simply dummy text of the printing
											and typesetting industry. Lorem
											Ipsum has been the standard dummy
											text ever since the 1500s, when an
											unknown printer took a galley of
											type and scrambled it to make a type
											specimen book. It has survived not
											only five centuries, but also the
											leap into electronic typesetting,
											remaining essentially unchanged. It
											was popularised in the 1960s with
											the release of Letraset sheets
											containing Lorem Ipsum passages, and
											more recently with desktop
											publishing software like Aldus
											PageMaker including versions of
											Lorem Ipsum. Lorem Ipsum is simply
											dummy text of the printing and
											typesetting industry. Lorem Ipsum
											has been the standard dummy text
											ever since the 1500s, when an
											unknown printer took a galley of
											type and scrambled it to make a type
											specimen book. It has survived not
											only five centuries, but also the
											leap into electronic typesetting,
											remaining essentially unchanged. It
											was popularised in the 1960s with
											the release of Letraset sheets
											containing Lorem Ipsum passages, and
											more recently with desktop
											publishing software like Aldus
											PageMaker including versions of
											Lorem Ipsum. Lorem Ipsum is simply
											dummy text of the printing and
											typesetting industry. Lorem Ipsum
											has been the standard dummy text
											ever since the 1500s, when an
											unknown printer took a galley of
											type and scrambled it to make a type
											specimen book. It has survived not
											only five centuries, but also the
											leap into electronic typesetting,
											remaining essentially unchanged. It
											was popularised in the 1960s with
											the release of Letraset sheets
											containing Lorem Ipsum passages, and
											more recently with desktop
											publishing software like Aldus
											PageMaker including versions of
											Lorem Ipsum.
										</span>
									</div>
									<div id="section_1_2">
										<h3>section_1_2</h3>
										<span>
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Lorem Ipsum has been the
											standard dummy text ever since the
											1500s, when an unknown printer took
											a galley of type and scrambled it to
											make a type specimen book. It has
											survived not only five centuries,
											but also the leap into electronic
											typesetting, remaining essentially
											unchanged. It was popularised in the
											1960s with the release of Letraset
											sheets containing Lorem Ipsum
											passages, and more recently with
											desktop publishing software like
											Aldus PageMaker including versions
											of Lorem Ipsum. Lorem Ipsum is
											simply dummy text of the printing
											and typesetting industry. Lorem
											Ipsum has been the standard dummy
											text ever since the 1500s, when an
											unknown printer took a galley of
											type and scrambled it to make a type
											specimen book. It has survived not
											only five centuries, but also the
											leap into electronic typesetting,
											remaining essentially unchanged. It
											was popularised in the 1960s with
											the release of Letraset sheets
											containing Lorem Ipsum passages, and
											more recently with desktop
											publishing software like Aldus
											PageMaker including versions of
											Lorem Ipsum. Lorem Ipsum is simply
											dummy text of the printing and
											typesetting industry. Lorem Ipsum
											has been the standard dummy text
											ever since the 1500s, when an
											unknown printer took a galley of
											type and scrambled it to make a type
											specimen book. It has survived not
											only five centuries, but also the
											leap into electronic typesetting,
											remaining essentially unchanged. It
											was popularised in the 1960s with
											the release of Letraset sheets
											containing Lorem Ipsum passages, and
											more recently with desktop
											publishing software like Aldus
											PageMaker including versions of
											Lorem Ipsum. Lorem Ipsum is simply
											dummy text of the printing and
											typesetting industry. Lorem Ipsum
											has been the standard dummy text
											ever since the 1500s, when an
											unknown printer took a galley of
											type and scrambled it to make a type
											specimen book. It has survived not
											only five centuries, but also the
											leap into electronic typesetting,
											remaining essentially unchanged. It
											was popularised in the 1960s with
											the release of Letraset sheets
											containing Lorem Ipsum passages, and
											more recently with desktop
											publishing software like Aldus
											PageMaker including versions of
											Lorem Ipsum.
										</span>
									</div>
									<div id="section_1_3">
										<h3>section_1_3</h3>
										<span>
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Lorem Ipsum has been the
											standard dummy text ever since the
											1500s, when an unknown printer took
											a galley of type and scrambled it to
											make a type specimen book. It has
											survived not only five centuries,
											but also the leap into electronic
											typesetting, remaining essentially
											unchanged. It was popularised in the
											1960s with the release of Letraset
											sheets containing Lorem Ipsum
											passages, and more recently with
											desktop publishing software like
											Aldus PageMaker including versions
											of Lorem Ipsum. Lorem Ipsum is
											simply dummy text of the printing
											and typesetting industry. Lorem
											Ipsum has been the standard dummy
											text ever since the 1500s, when an
											unknown printer took a galley of
											type and scrambled it to make a type
											specimen book. It has survived not
											only five centuries, but also the
											leap into electronic typesetting,
											remaining essentially unchanged. It
											was popularised in the 1960s with
											the release of Letraset sheets
											containing Lorem Ipsum passages, and
											more recently with desktop
											publishing software like Aldus
											PageMaker including versions of
											Lorem Ipsum. Lorem Ipsum is simply
											dummy text of the printing and
											typesetting industry. Lorem Ipsum
											has been the standard dummy text
											ever since the 1500s, when an
											unknown printer took a galley of
											type and scrambled it to make a type
											specimen book. It has survived not
											only five centuries, but also the
											leap into electronic typesetting,
											remaining essentially unchanged. It
											was popularised in the 1960s with
											the release of Letraset sheets
											containing Lorem Ipsum passages, and
											more recently with desktop
											publishing software like Aldus
											PageMaker including versions of
											Lorem Ipsum. Lorem Ipsum is simply
											dummy text of the printing and
											typesetting industry. Lorem Ipsum
											has been the standard dummy text
											ever since the 1500s, when an
											unknown printer took a galley of
											type and scrambled it to make a type
											specimen book. It has survived not
											only five centuries, but also the
											leap into electronic typesetting,
											remaining essentially unchanged. It
											was popularised in the 1960s with
											the release of Letraset sheets
											containing Lorem Ipsum passages, and
											more recently with desktop
											publishing software like Aldus
											PageMaker including versions of
											Lorem Ipsum.
										</span>
									</div>
								</div>
								<div id="section_2">
									<h3>section_2</h3>
									<span>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the standard dummy text
										ever since the 1500s, when an unknown
										printer took a galley of type and
										scrambled it to make a type specimen
										book. It has survived not only five
										centuries, but also the leap into
										electronic typesetting, remaining
										essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum. Lorem Ipsum is simply dummy
										text of the printing and typesetting
										industry. Lorem Ipsum has been the
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type specimen book. It has survived
										not only five centuries, but also the
										leap into electronic typesetting,
										remaining essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum. Lorem Ipsum is simply dummy
										text of the printing and typesetting
										industry. Lorem Ipsum has been the
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type specimen book. It has survived
										not only five centuries, but also the
										leap into electronic typesetting,
										remaining essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum.
									</span>
								</div>
								<div id="section_3">
									<h3>section_3</h3>
									<span>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the standard dummy text
										ever since the 1500s, when an unknown
										printer took a galley of type and
										scrambled it to make a type specimen
										book. It has survived not only five
										centuries, but also the leap into
										electronic typesetting, remaining
										essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum. Lorem Ipsum is simply dummy
										text of the printing and typesetting
										industry. Lorem Ipsum has been the
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type specimen book. It has survived
										not only five centuries, but also the
										leap into electronic typesetting,
										remaining essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum. Lorem Ipsum is simply dummy
										text of the printing and typesetting
										industry. Lorem Ipsum has been the
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type specimen book. It has survived
										not only five centuries, but also the
										leap into electronic typesetting,
										remaining essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum. Lorem Ipsum is simply dummy
										text of the printing and typesetting
										industry. Lorem Ipsum has been the
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type specimen book. It has survived
										not only five centuries, but also the
										leap into electronic typesetting,
										remaining essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum.
									</span>
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

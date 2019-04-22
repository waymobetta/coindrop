import React from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import { navigate } from "gatsby"
import { userLogout } from '../state/actions/user'

const styles = () => ({
})

class Component extends React.Component {
	constructor(props) {
		super(props)

		this.props.dispatch(userLogout())
		navigate('/')
	}

	render() {
		return (
			<div></div>
		)
	}
}

Component.propTypes = {

}

export default connect()(compose(
	withStyles(styles, { withTheme: false }),
	withWidth()
)(Component))

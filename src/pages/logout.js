import React from 'react'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import { navigate } from "gatsby"
import {
	logout
} from '../lib/api'

const styles = () => ({
})

class Component extends React.Component {
	constructor(props) {
		super(props)

		logout()
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

export default compose(
	withStyles(styles, { withTheme: false }),
	withWidth()
)(Component)

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {
	NavbarToggler,
	Collapse,
	Container,
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
} from 'reactstrap'
import { ReactComponent as Logo } from './assets/coindrop_logo.svg'

export default class Header extends React.Component {
	constructor(props) {
		super(props)
		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false,
		}
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}
	render() {
		const { showLogo, siteTitle, hasShadow } = this.props
		return (
			<Navbar
				color="faded"
				light
				expand="md"
				fixed="top"
				className={hasShadow ? 'hasShadow' : ''}
			>
				<Container>
					{showLogo && (
						<NavbarBrand href="/">
							<Logo className="header__logo" />
						</NavbarBrand>
					)}
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link
									to="/about/"
									activeClassName="active"
									className="nav-link"
								>
									About
								</Link>
							</NavItem>
							<NavItem>
								<Link
									to="/contact/"
									activeClassName="active"
									className="nav-link"
								>
									Contact
								</Link>
							</NavItem>
							<NavItem>
								<Link
									to="/login/"
									activeClassName="active"
									className="nav-link"
								>
									Log In
								</Link>
							</NavItem>
							<NavItem>
								<Link
									to="/signup/"
									activeClassName="active"
									className="nav-link"
								>
									Sign Up
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		)
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string,
	showLogo: PropTypes.bool,
	hasShadow: PropTypes.bool,
}

Header.defaultProps = {
	siteTitle: '',
	showLogo: true,
	hasShadow: true,
}

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { ReactComponent as LogoFull } from '../components/assets/coindrop_logo_full.svg'
import { Button, FormGroup, Input, Row, Col } from 'reactstrap'

const Login = () => (
	<Layout>
		<SEO title="Login" />
		<Row>
			<Col md={6} lg={6} sm={8} className="pb-4">
				<Link to="/">
					<LogoFull className="logo--signup" />
				</Link>
				<h2>Where Your Contribution Matters</h2>
			</Col>
		</Row>
		<Row>
			<Col md={6} lg={4} sm={8}>
				<FormGroup className="pb-2">
					<Input
						type="email"
						name="email"
						id="exampleEmail"
						placeholder="Email"
						spellCheck="false"
						autoCorrect="false"
						autoComplete="off"
						className="form-control--underlined"
					/>
				</FormGroup>
				<FormGroup>
					<Input
						type="password"
						name="password"
						id="examplePassword"
						placeholder="Password"
						spellCheck="false"
						autoCorrect="false"
						autoComplete="off"
						className="form-control--underlined"
					/>
					<small className="form-text text-muted text-right help-text">
						<a href="#">Forgot Password?</a>
					</small>
				</FormGroup>
				<Button
					outline
					color="primary"
					className="button--cd btn-block"
				>
					Login
				</Button>
				<p>
					No Account?
					<Link to="/signup"> Create Account</Link>
				</p>
			</Col>
		</Row>
	</Layout>
)

export default Login

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const SignUp = () => (
	<Layout>
		<SEO title="SignUp" />
		{/* <Form>
			<Row>
				<Col md={6} className="pb-4">
					<Link to="/">
						<LogoFull className="logo--signup" />
					</Link>
					<h2>Get Paid To Contribute</h2>
				</Col>
			</Row>
			<Row>
				<Col md={6} lg={4} sm={8}>
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Label for="first">Name</Label>
								<Input
									type="text"
									name="first"
									id="firstName"
									placeholder="First"
									spellCheck="false"
									autoCorrect="false"
									autoComplete="off"
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label for="last" className="empty-label">Name</Label>
								<Input
									type="text"
									name="last"
									id="lastName"
									placeholder="Last"
									spellCheck="false"
									autoCorrect="false"
									autoComplete="off"
								/>
							</FormGroup>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md={6} lg={4} sm={8}>
					<FormGroup>
						<Label for="ethWallet">Ethereum Wallet Address</Label>
						<Input
							type="text"
							name="ethWallet"
							id="ethWalletAddr"
							placeholder="Enter Public Key"
							spellCheck="false"
							autoCorrect="false"
							autoComplete="off"
						/>
						<small className="form-text text-muted text-right eht__help help-text">
							<a href="#" id="whatEth">
								What Is This?
							</a>
							<a href="#" id="whyEth">
								Why Eth?
							</a>
						</small>
						<UncontrolledTooltip
							placement="bottom-end"
							target="whyEth"
							delay={{ hide: 0 }}
							hideArrow
						>
							Connect an Ethereum wallet to receive cryptocurrency
							from participating projects.
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="bottom-end"
							target="whatEth"
							delay={{ hide: 0 }}
							hideArrow
						>
							Connect an Ethereum wallet to receive cryptocurrency
							from participating projects.
						</UncontrolledTooltip>
					</FormGroup>

					<FormGroup>
						<Label for="examplePassword">Password</Label>
						<Input
							type="password"
							name="password"
							id="examplePassword"
							placeholder="Enter Password"
							autoComplete="off"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="confirmPassword">Repeat Password</Label>
						<Input
							type="password"
							name="password"
							id="confirmPassword"
							placeholder="Enter Password"
							autoComplete="off"
						/>
					</FormGroup>
					<FormGroup check className="agree__terms">
						<Label check>
							<Input type="checkbox" /> I agree with the terms and
							conditions.
						</Label>
					</FormGroup>
					<Button
						outline
						color="primary"
						className="button--cd btn-block"
					>
						Create Account
					</Button>
					<p>
						Already have an account? <Link to="/login">Log In</Link>
					</p>
				</Col>
			</Row>
		</Form> */}
	</Layout>
)

export default SignUp

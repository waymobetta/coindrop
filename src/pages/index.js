import React from 'react'
import { Link } from 'gatsby'

import Landing from '../components/landing'
import SEO from '../components/seo'
import FeatureDiamond from '../components/featureDiamond/featureDiamond'
import { Row, Col, Button } from 'reactstrap'
import { ReactComponent as LogoFull } from '../components/assets/coindrop_logo_full.svg'
import { ReactComponent as ScrollDown } from '../components/assets/scroll_down.svg'
import VanillaTilt from 'vanilla-tilt'
import { animateScroll as scroll, scroller } from 'react-scroll' // eslint-disable-line no-unused-vars

export default class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
		}
		this.heroBox = React.createRef()
		this.scrollTo = this.scrollTo.bind(this)
	}
	componentDidMount() {
		this.scrollTop = 0
		VanillaTilt.init(this.heroBox.current, {
			max: 25,
			speed: 400,
		})
	}
	scrollTo() {
		scroller.scrollTo('home-next', {
			duration: 1300,
			delay: 100,
			smooth: 'easeInOutQuart',
			offset: -50,
		})
	}
	render() {
		return (
			<Landing>
				<SEO
					title="Home"
					keywords={['coinDrop', 'application', 'react']}
				/>
				<Row className="main__row--home">
					<Col
						xs="12"
						className="justify-content-around d-flex flex-column"
					>
						<div className="hero__box" ref={this.heroBox}>
							<span
								className="hero__box__diamond"
								ref={this.logoTilt}
							/>
							<span className="hero__box__inner">
								<LogoFull className="home__logo" />
								<h4>Where It Pays To Contribute</h4>
								<Button
									outline
									color="primary"
									className="button--cd"
								>
									Get Started
								</Button>
								<p>
									Already have an account?{' '}
									<Link to="/login">Log In</Link>
								</p>
							</span>
						</div>
						<a className="test1" onClick={this.scrollTo}>
							<ScrollDown className="scroll__down" />
						</a>
					</Col>
				</Row>
				<Row
					className="justify-content-around main__row--features"
					name="home-next"
				>
					<FeatureDiamond
						icon1="ethereum"
						icon2="socialMedia"
						icon3="hashLove"
						title="Connect"
						desc="Connect your Ethereum address"
					/>

					<FeatureDiamond
						icon1="personTalking"
						icon2="commentBubbles"
						icon3="commentBubble"
						title="Engage"
						desc="Engage with Projects"
					/>

					<FeatureDiamond
						icon1="dollar"
						icon2="coins"
						icon3="walletCoins"
						title="Get Paid"
						desc="Receive Crypto for Contributing"
					/>

					<Col className="align-items-center d-flex flex-column text-center">
						<h3>
							You’ve built a great reputation. Now get paid for
							it!
						</h3>
						<p>
							Connect your Ethereum wallet to your social media
							accounts and receive crypto from projects that value
							your engagement.
						</p>
						<Button outline color="primary" className="button--cd">
							Get Started
						</Button>
					</Col>
				</Row>
				<Row className="justify-content-center" />
			</Landing>
		)
	}
}

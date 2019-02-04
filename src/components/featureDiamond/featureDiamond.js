import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import './featureDiamond.css'
import { ReactComponent as Diamond } from '../../components/assets/diamond.svg'
import { ReactComponent as Coins } from '../../components/assets/coins.svg'
import { ReactComponent as CommentBubble } from '../../components/assets/comment_bubble.svg'
import { ReactComponent as CommentBubbles } from '../../components/assets/comment_bubbles.svg'
import { ReactComponent as Dollar } from '../../components/assets/dollar_icon.svg'
import { ReactComponent as Ethereum } from '../../components/assets/ethereum.svg'
import { ReactComponent as HashLove } from '../../components/assets/hash_love.svg'
import { ReactComponent as PersonTalking } from '../../components/assets/person_talking.svg'
import { ReactComponent as SocialMedia } from '../../components/assets/social_media.svg'
import { ReactComponent as WalletCoins } from '../../components/assets/wallet_coins.svg'

const FeatureDiamond = props => {
	const components = {
		coins: Coins,
		commentBubble: CommentBubble,
		commentBubbles: CommentBubbles,
		dollar: Dollar,
		ethereum: Ethereum,
		hashLove: HashLove,
		personTalking: PersonTalking,
		socialMedia: SocialMedia,
		walletCoins: WalletCoins,
	}
	const Icon1 = components[props.icon1]
	const Icon2 = components[props.icon2]
	const Icon3 = components[props.icon3]
	return (
		<div className="featureDiamond__box d-flex justify-content-between flex-column">
			<div className="featureDiamond__inner">
				<Icon1
					className={classNames(
						'featureDiamond__icon',
						`icon__${props.icon1}`
					)}
				/>
				<Icon2
					className={classNames(
						'featureDiamond__icon',
						`icon__${props.icon2}`
					)}
				/>
				<Icon3
					className={classNames(
						'featureDiamond__icon',
						`icon__${props.icon3}`
					)}
				/>
				<Diamond className="diamond__icon" />
			</div>
			<h4>{props.title}</h4>
			<p>{props.desc}</p>
		</div>
	)
}

export default FeatureDiamond

FeatureDiamond.propTypes = {
	siteTitle: PropTypes.string,
	showLogo: PropTypes.bool,
	title: PropTypes.string,
	desc: PropTypes.string,
	icon1: PropTypes.string,
	icon2: PropTypes.string,
	icon3: PropTypes.string,
}

FeatureDiamond.defaultProps = {
	siteTitle: '',
	showLogo: true,
	title: '',
	desc: '',
	icon1: 'ethereum',
	icon2: 'ethereum',
	icon3: 'ethereum',
}

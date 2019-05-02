import Swagger from 'swagger-client'
import spec from '../swagger/swagger.json'
import Amplify, { Auth } from 'aws-amplify'
//import dotenv from 'dotenv'
//dotenv.config()

const baseURL = 'http://api.coindrop.io/v1/'
// export const baseURL = process.env.API_BASE_URL || 'http://localhost:5000/v1'

spec.host = baseURL.replace(/.*\/\/([\w.:]+)\/.*/, '$1')

let client

Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		//region: process.env.REACT_APP_AWS_COINDROP_COGNITO_REGION,
		region: 'us-west-2',
		//userPoolId: process.env.REACT_APP_AWS_COINDROP_COGNITO_USER_POOL_ID,
		userPoolId: 'us-west-2_L0VWFHEny',
		//userPoolWebClientId: process.env.REACT_APP_AWS_COINDROP_COGNITO_APP_CLIENT_ID
		userPoolWebClientId: '6f1spb636ptn074on0pdjgnk8l'
	}
})

export const login = async ({ email, password }) => {
	const { signInUserSession: { accessToken: { jwtToken } } } = await Auth.signIn(email, password)
	const userId = await getUserId(await getCognitoUserId())

	localStorage.setItem('accessToken', jwtToken)
	localStorage.setItem('userId', userId)

	return { jwtToken, userId }
}

export const sendResetPasswordLink = async (email) => {
	return await Auth.forgotPassword(email)
}

export const resetPassword = async (email, confirmationCode, newPassword) => {
	return Auth.forgotPasswordSubmit(email, confirmationCode, newPassword)
}

export const signup = async ({ email, password }) => {
	const newUser = await Auth.signUp(email, password)

	const { body: result, ok } = await client.apis.users.users_create({
		payload: {
			cognitoAuthUserId: newUser.userSub
		}
	})

	if (!ok) {
		throw new Error('could not create user')
	}

	return result
}

export const logout = () => {
	Auth.signOut({ global: true })
	localStorage.removeItem('accessToken')
	localStorage.removeItem('userId')
}

export const isLoggedIn = async () => {
	try {
		await currentUser()
		return true
	} catch (err) {
		return false
	}
}

export const currentUser = async () => {
	return await Auth.currentAuthenticatedUser()
}

export const getCognitoUserId = async () => {
	return (await Auth.currentAuthenticatedUser()).username
}

export const getUserId = async () => {
	const cached = localStorage.getItem('userId')
	if (cached) {
		return cached
	}

	const cognitoUserId = await getCognitoUserId()

	if (!cognitoUserId) {
		throw new Error('User not logged in')
	}

	const res = await client.apis.users.users_list({
		cognitoAuthUserId: cognitoUserId
	})

	return res.body.id
}

export const getEmail = async () => {
	const user = await currentUser()
	return user.attributes.email
}

export const getProfile = async () => {
	// TODO: backend profiles api
	const email = await getEmail()

	return {
		name: '',
		email
	}
}

export const accessToken = () => {
	return localStorage.getItem('accessToken')
}

export const getWallet = async () => {
	const { body: result, ok } = await client.apis.wallets.wallets_show()

	if (!ok) {
		throw new Error('could not get user wallet')
	}

	return result
}

export const updateWallet = async (newWalletAddress) => {
	const { body: result, ok } = await client.apis.wallets.wallets_update({
		payload: {
			walletAddress: newWalletAddress
		}
	})

	if (!ok) {
		throw new Error('could not update user wallet')
	}

	return result
}

export const verifyWallet = async ({ userID, verifyObj, taskID }) => {
	try {
		const payload = {
			'userID': userID,
			'taskID': taskID,
			'address': verifyObj.address,
			'message': verifyObj.msg,
			'signature': verifyObj.sig,
			'version': verifyObj.version
		}
		const jwtToken = accessToken();

		return fetch(`${baseURL}wallets/verify`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				'Authorization': 'Bearer ' + jwtToken
			},
			body: JSON.stringify(payload)
		}).then(res => {
			return res.json()
		}).then(jsonResponse => {
			return jsonResponse
		})
	} catch (error) {
		console.error('Error verifying wallet')
	}
}

export const getTasks = async (userId) => {
	const { body: result, ok } = await client.apis.tasks.tasks_list({
		payload: {
			userId,
		}
	})

	if (!ok) {
		throw new Error('could not get user tasks')
	}

	return result.tasks
}

export const getTask = async (taskId) => {
	const { body: result, ok } = await client.apis.tasks.tasks_show({
		taskId
	})

	if (!ok) {
		throw new Error('could not get user tasks')
	}

	return result
}

export const initClient = async () => {
	try {
		client = await Swagger({
			spec,
			requestInterceptor(req) {
				const token = accessToken()
				if (token) {
					req.headers['Authorization'] = `Bearer ${token}`;
					return req
				}
			}
		})
		window.client = client
	} catch (error) {
		console.error('Init API Client error: ', error)
	}
}

import Swagger from 'swagger-client'
import spec from '../swagger/swagger.json'
import Amplify, { Auth } from 'aws-amplify'
//import dotenv from 'dotenv'
//dotenv.config()

export const baseURL = process.env.API_BASE_URL || 'http://localhost:5000/v1'

spec.host = baseURL.replace(/.*\/\/([\w+:]+)\/.*/, '$1')

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

export const login = async (email, password) => {
	const { signInUserSession: { accessToken: { jwtToken } } } = await Auth.signIn(email, password)

	localStorage.setItem('accessToken', jwtToken)

	return jwtToken
}

export const signup = async (email, password) => {
	const newUser = await Auth.signUp(email, password)

	const { body: result, ok } = await client.apis.user.user_create({
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
	localStorage.removeItem('accessToken')
}

export const isLoggedIn = () => {
	return !!localStorage.getItem('accessToken')
}

export const currentUser = async () => {
    return await Auth.currentAuthenticatedUser()
}

async function initClient () {
  client = await Swagger({ spec })
  window.client = client
}

initClient()

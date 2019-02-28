import Amplify, { Auth } from 'aws-amplify'
//import dotenv from 'dotenv'
//dotenv.config()

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

	console.log(newUser)

	//localStorage.setItem('accessToken', jwtToken)

	return newUser
}

export const logout = () => {
	localStorage.removeItem('accessToken')
}

export const isLoggedIn = () => {
	return !!localStorage.getItem('accessToken')
}

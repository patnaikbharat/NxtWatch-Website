import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginMainContainer,
  LoginCardContainer,
  LoginWebsiteLogo,
  LoginFormContainer,
  LoginLabelText,
  LoginUserInput,
  LoginCheckboxContainer,
  LoginCheckbox,
  LoginCheckboxLabel,
  LoginButton,
  LoginErrorMsg,
} from './styledComponent'

class Login extends Component {
  state = {
    loginUserName: '',
    loginPassword: '',
    isError: false,
    errorMsg: '',
    isChecked: false,
  }

  onChangeUsername = event => {
    this.setState({loginUserName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({loginPassword: event.target.value})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onUserLogin = async event => {
    event.preventDefault()
    const {loginUserName, loginPassword} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: loginUserName, password: loginPassword}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', fetchedData.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
      this.setState({isError: false})
    } else {
      this.setState({errorMsg: fetchedData.error_msg, isError: true})
    }
  }

  render() {
    const {loginUserName, loginPassword, isError, errorMsg, isChecked} =
      this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginMainContainer>
        <LoginCardContainer>
          <LoginWebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LoginFormContainer onSubmit={this.onUserLogin}>
            <LoginLabelText htmlFor="username">USERNAME</LoginLabelText>
            <LoginUserInput
              type="text"
              value={loginUserName}
              onChange={this.onChangeUsername}
              placeholder="Username"
              id="username"
            />
            <LoginLabelText htmlFor="password">PASSWORD</LoginLabelText>
            <LoginUserInput
              type={isChecked ? 'text' : 'password'}
              value={loginPassword}
              onChange={this.onChangePassword}
              placeholder="Password"
              id="password"
            />
            <LoginCheckboxContainer>
              <LoginCheckbox
                type="checkbox"
                id="checkbox"
                onClick={this.onClickCheckbox}
              />
              <LoginCheckboxLabel htmlFor="checkbox">
                Show Password
              </LoginCheckboxLabel>
            </LoginCheckboxContainer>
            <LoginButton type="submit">Login</LoginButton>
            {isError && <LoginErrorMsg>*{errorMsg}</LoginErrorMsg>}
          </LoginFormContainer>
        </LoginCardContainer>
      </LoginMainContainer>
    )
  }
}

export default Login

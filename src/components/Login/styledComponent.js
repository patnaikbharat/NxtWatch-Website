import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  background-color: #f9f9f9;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginCardContainer = styled.div`
  background-color: #f8fafc;
  max-width: 600px;
  box-shadow: 0px 4px 4px 4px #bfbfbf;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 769px) {
    max-width: 350px;
    padding: 20px;
  }
`

export const LoginWebsiteLogo = styled.img`
  width: 200px;
  margin-bottom: 50px;
  margin-top: 20px;
  @media (max-width: 769px) {
    width: 150px;
    margin-bottom: 30px;
    margin-top: 10px;
  }
`

export const LoginFormContainer = styled.form`
  width: 100%;
`

export const LoginLabelText = styled.label`
  color: #475569;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const LoginUserInput = styled.input`
  width: 100%;
  color: #181818;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: transparent;
  border: solid 1px #94a3b8;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  margin-top: 5px;
  margin-bottom: 25px;
`

export const LoginCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`

export const LoginCheckbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  cursor: pointer;
  outline: none;
`

export const LoginCheckboxLabel = styled.label`
  color: #231f20;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const LoginButton = styled.button`
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 7px;
  width: 100%;
  height: 35px;
  outline: none;
  cursor: pointer;
`

export const LoginErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-top: 0px;
`

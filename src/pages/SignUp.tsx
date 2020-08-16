import {
  useContext
} from 'react'
import { Container } from "../components/Container"
import { TitleContainer } from "../components/TitleContainer"
import { Title } from "../components/Title"
import { AuthContext } from '../actions/authenticate'

import styled from 'styled-components'
import {
  Link
} from "react-router-dom";

import * as React from 'react'

const SignUp: React.FC<{}> = () => {
  const {
    currentUser,
    signIn,
    signOut,
    isUserSignedIn
  } = useContext(AuthContext)

  return (
    <>
      <Container>
        <TitleContainer>
          <Title size="1.6rem">アカウントを作成</Title>
          {
            !!isUserSignedIn && isUserSignedIn() ? (<button onClick={() => !!signOut && signOut()}>ログアウトする</button>)
                             : (<button onClick={() => !!signIn && signIn()}>サインアップする</button>)
          }          
        </TitleContainer>
      </Container>
    </>
  )
}

const FirstContainer = styled.div`
  padding: 5%;
`
const Logo = styled.img`
  height: 2.75rem;
`

const StartService = styled.div<{height: string, padding: string}>`
  padding: ${props => props.padding};
  height: ${props => props.height}
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80px;
`
const Button = styled(Link)<{BuckColor: string, fontColor: string}>`
  line-height: 35px;
  text-align: center;
  color: ${props => props.fontColor};
  background-color: ${props => props.BuckColor};
  border-radius: 13px;
  height: 45%;
  font-weight: bold;
  text-decoration: none;
`

const IntroductionContainer = styled.div`
  background-color: #70CAF7;
  padding: 4%;
  position: relative;
`

const Introduction = styled.p<{size: string}>`
  color: white;
  font-size: ${props => props.size};
  font-weight: bold;
`

const LogoArea = styled.div`
  position: absolute;
  right: 10px;
`

export default SignUp
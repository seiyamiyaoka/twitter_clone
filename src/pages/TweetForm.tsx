import {
  useContext,
  useState
} from 'react'
import { AuthContext } from '../actions/authenticate'
import { saveMessage } from '../actions/tweet'
import TwitterLogo from "../assets/twitter.svg"
import Arow from "../assets/left.svg"
import { Container } from "../components/Container"
import { TitleContainer } from "../components/TitleContainer"
import { Title } from "../components/Title"

import styled from 'styled-components'
import {
  Link
} from "react-router-dom";

import * as React from 'react'

type ContentProps = {
  title: string
}

const TweetForm: React.FC<{}> = () => {
  const {
    currentUser
  } = useContext(AuthContext)

  const [text, setText] = useState("")

  const clickHandle = () => {
    saveMessage(text)
  }

  console.log(currentUser)
  return (
    <>
      <Container>
        <FirstContainer>
          <LogoArea
            mb="4%"
            bb="1px solid white"
            jc="space-between"
            ai="center"
          >
            <Logo height="1.25rem" mb="4%" src={ Arow } />
            <Button to="tweets"
                    BuckColor="#20A1F1"
                    fontColor="white"
                    onClick={clickHandle}
            >
              ツイートする
            </Button>
          </LogoArea>
          <LogoArea ai="start">
            <Logo height="2.25rem" src={ currentUser?.photoURL || TwitterLogo} />
            <TweetArea
              name=""
              id=""
              value={text}
              onChange={(e) => setText(e.target.value)}
              cols={30}
              rows={2}
              placeholder="いまどうしてる？"
              />
          </LogoArea>
          <StartService height="110px" padding="2%">
            
          </StartService>
        </FirstContainer>
        <StartService height="200px" padding="0%">
        </StartService>
      </Container>
    </>
  )
}

const FirstContainer = styled.div`
  padding: 5%;
`
const Logo = styled.img<{height: string, mb?: string}>`
  height: ${props => props.height};
  margin-bottom: ${props => props.mb ? props.mb : "0"};
`

const LogoArea = styled.div<{mb?: string, bb?: string, jc?: string, ai?: string}>`
  width: 100%;
  display: flex;
  align-items: ${props => props.ai ? props.ai : ""};
  margin-bottom: ${props => props.mb ? props.mb : "0"};
  border-bottom: ${props => props.bb ? props.bb : ""};
  justify-content: ${props => props.jc ? props.jc : ""}
`

const TweetArea = styled.textarea`
  border: 0;
  background-color: inherit;
  color: white;
  margin-left: 3%;
`

const HomeTitle = styled(Title)`
  margin-left: 6%;
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
  line-height: 14px;
  text-align: center;
  color: ${props => props.fontColor};
  background-color: ${props => props.BuckColor};
  border-radius: 13px;
  height: 13px;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
  padding: 3%;
  margin-bottom: 3%;
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

export default TweetForm
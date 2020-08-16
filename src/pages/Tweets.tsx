import {
  useContext,
  useState,
  useEffect
} from 'react'
import { AuthContext } from '../actions/authenticate'
import { saveMessage, loadMessages, documentType } from '../actions/tweet'
import TwitterLogo from "../assets/twitter.svg"
import Plus from "../assets/plus.svg"
import Arow from "../assets/left.svg"
import { Container } from "../components/Container"
import { TitleContainer } from "../components/TitleContainer"
import TweetCard from "../components/TweetCard"
import { Title } from "../components/Title"

import styled from 'styled-components'
import {
  Link
} from "react-router-dom";

import * as React from 'react'

type ContentProps = {
  title: string
}

const Tweets: React.FC<{}> = () => {
  const {
    currentUser
  } = useContext(AuthContext)

  const [messages, setMessages] = useState<documentType[]>([])

  useEffect(
    () => {
      loadMessages().then((messages) => {
        const fetchedMessages = messages.docs.map((d) => d.data())
        setMessages(fetchedMessages)
      })
    },
    [],
  );

  console.log(currentUser)
  return (
    <MainContainer>
      <Container>
        <FirstContainer>
          <LogoArea ai="start" bb="1px solid white">
            <Logo height="2.25rem" mb="4%" src={ currentUser?.photoURL || TwitterLogo} />
            <HomeTitle size="1.2rem">ホーム</HomeTitle>
          </LogoArea>
          <StartService height="110px" padding="2%">
            {
              messages.map(message => (
                <TweetCard message={message} />
              ))
            }
          </StartService>
        </FirstContainer>
        <PlusLogo onClick={() => window.location.replace("/tweets/new")}
                  height="3.25rem"
                  mb="4%"
                  src={ Plus } />  
      </Container>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  height: 500px;
`

const FirstContainer = styled.div`
  padding: 5%;
`
const Logo = styled.img<{height: string, mb?: string}>`
  height: ${props => props.height};
  margin-bottom: ${props => props.mb ? props.mb : "0"};
`

const PlusLogo = styled(Logo)`
    position: fixed;
    right: 50px;
    top: 300px;
    background: white
`

const LogoArea = styled.div<{mb?: string, bb?: string, jc?: string, ai?: string}>`
  width: 100%;
  display: flex;
  align-items: ${props => props.ai ? props.ai : ""};
  margin-bottom: ${props => props.mb ? props.mb : "0"};
  border-bottom: ${props => props.bb ? props.bb : ""};
  justify-content: ${props => props.jc ? props.jc : ""}
  border-bottom: 1px solid white
`

const TweetArea = styled.textarea`
  border: 0;
  background-color: inherit;
  color: white;
  margin-left: 3%;
`

const HomeTitle = styled(Title)`
  line-height: 37px;
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

export default Tweets
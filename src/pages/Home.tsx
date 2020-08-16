import TwitterLogo from "../assets/twitter.svg"
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

const Home: React.FC<ContentProps> = ({ title }) => {
  return (
    <>
      <Container>
        <FirstContainer>
          <div className="logo">
            <Logo src={TwitterLogo} />
          </div>
          <TitleContainer>
            <Title size="1.6rem">「いま」起きていることを見つけよう</Title>
          </TitleContainer>
          <StartService height="110px" padding="2%">
            <div className="start_service_button">
              <Title size="1.4rem">Twitterをはじめよう</Title>
              <ButtonContainer>
                <Button to="/signup" BuckColor="#20A1F1" fontColor="white">アカウント作成</Button>
                <Button to="/" BuckColor="#15202b" fontColor="white">ログイン</Button>
              </ButtonContainer>
            </div>
          </StartService>
        </FirstContainer>
        <StartService height="200px" padding="0%">
          <IntroductionContainer>
            <Introduction size="1.2rem">あなたの「好き」をフォローしましょう</Introduction>
            <Introduction size="1.2rem">話題のトピックを追いかけましょう。</Introduction>
            <Introduction size="1.2rem">会話に参加しましょう</Introduction>
          </IntroductionContainer>
        </StartService>
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

export default Home
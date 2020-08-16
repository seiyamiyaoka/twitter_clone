import * as React from 'react'
import {
  useContext,
  useState
} from 'react'
import { AuthContext } from '../actions/authenticate'
import { saveMessage } from '../actions/tweet'
import { Container } from "./Container"
import styled from 'styled-components'
import { documentType } from "../actions/tweet"
import Plus from "../assets/plus.svg"

type messageProps = {
  message: documentType
}

const TweetCard: React.FC<messageProps> = ({message}) => {
  const {
    currentUser
  } = useContext(AuthContext)

  const [text, setText] = useState("")

  const clickHandle = () => {
    saveMessage(text)
  }

  console.log(message)
  return (
    <>
      <Container>
        <FirstContainer>
          <StartService height="auto" padding="2%">
            <div>
              <Logo height="2.25rem" mb="4%" src={ message.profilePicUrl }/>
            </div>
            <RightArea>
              <Content>{ message.name }</Content>
              <Content>{ message.text }</Content>
            </RightArea>
          </StartService>
        </FirstContainer>
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

const Content = styled.div`
  color: white;
  font-weight: bold;
`
const RightArea = styled.div`
  margin-left: 5%;
  line-height: 20px;
`

const StartService = styled.div<{height: string, padding: string}>`
  padding: ${props => props.padding};
  height: ${props => props.height};
  display: flex;
  border-bottom: 1px solid #5f5656;
`

export default TweetCard
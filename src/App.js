import React from 'react'
import {ChatEngine} from 'react-chat-engine'

// style
import './App.css'

// custom components
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

function App() {
if(!localStorage.getItem('username')) return <LoginForm/>
  return (
   <ChatEngine
       height = '100vh'
       projectID = '342f7cc9-96a9-4cdb-a337-c14ca07502c3'
       userName = {localStorage.getItem('username')}
       userSecret= {localStorage.getItem('password')}
       renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
   />
  )
}

export default App

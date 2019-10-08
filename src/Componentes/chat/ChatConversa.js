import React, { Component } from 'react'

import {Alert, Badge} from 'reactstrap'

class ChatConversa extends Component {
   render() {
       return (
           <div className='chat-conversa'> 
                <Badge color='primary'>
                    você disse:
                </Badge>
                                
                <Alert color='primary'>
                   Olá como está a conversar
                </Alert>

                <Badge color='warning'>
                    Chatbot disse:
                </Badge>
                      
                <Alert color='warning'>
                   Olá como está a conversar
                </Alert>
           
                <Badge color='primary'>
                    você disse:
                </Badge>
                                
                <Alert color='primary'>
                   Olá como está a conversar
                </Alert>

                <Badge color='warning'>
                    Chatbot disse:
                </Badge>
                      
                <Alert color='warning'>
                   Olá como está a conversar
                </Alert>           
                
           </div>
       );
   }

}

export default ChatConversa
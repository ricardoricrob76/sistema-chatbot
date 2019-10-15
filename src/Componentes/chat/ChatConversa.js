import React, { Component } from 'react'
import {Alert, Badge} from 'reactstrap'
import {connect} from 'react-redux'

class ChatConversa extends Component {

   render() {
       return (
           <div className='chat-conversa'> 
             {JSON.stringify(this.props)}
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

const mapStateToProps = (state) => {
    return {
        mensagens: state.chat.mensagens
    }
}

export default connect(mapStateToProps, null) (ChatConversa)
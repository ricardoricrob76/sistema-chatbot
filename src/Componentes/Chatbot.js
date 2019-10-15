import React, {Component} from 'react'
import '../index.css';

//import '../App.css';
import ChatHeader from './chat/ChatHeader'
import ChatConversa from './chat/ChatConversa';
import ChatMensagem from './chat/ChatMensagem';
// import do chat.css independente só pra Chat.
import './chat/chat.css'


class Chatbot extends Component {
    render() {
        return (
            <div className='Chatbot'> 
                 <div className='chat-conteudo'>
                   <ChatHeader />
                   <ChatConversa />
                   <ChatMensagem />
                 </div>  
            </div>
        );
    }

}

export default Chatbot
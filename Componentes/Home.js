import React, {Component} from 'react'
import { Button } from 'reactstrap';
import '../App.css';

class Home extends Component {
    render(){
        return (
            <div>
                <p className="App-intro">
                    Pizzaria BigFatia - ChatBot..
                </p>
                <Button color='danger'>BotãoZinho Perigoso!</Button>
            </div>

        );
    }
    
}

export default Home
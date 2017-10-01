import React from 'react';
import Formulaire from './formulaire';
import Message from './message';
import Base from '../base';
//CSS
import ReactCSSTranstionGroup from 'react-addons-css-transition-group';
import '../animation.css';


class App extends React.Component{
    state = {
        messages:{}
    }

    componentWillMount(){
        this.refs = Base.syncState('/', {
            context: this,
            state: 'messages'
        });
    }

    componentDidUpdate() {
    this.message.scrollTop = this.message.scrollHeight;
        
    }
    
    addMessage = (message) => {
        const messages = {...this.state.messages};
        const timeStamp = Date.now();
        messages['message-' + timeStamp] = message;

        Object.keys(messages).slice(0, -10).map( key => messages[key] = null);
        this.setState({messages});
        
    }

   
  isUser = (pseudo) => {
    return pseudo === this.props.params.pseudo;
};
    render(){
        const messages = Object
        .keys(this.state.messages)
        .map(
            (key) => <Message key={key} pseudo={this.props.params.pseudo} details={this.state.messages[key]} isUser={this.isUser}/>
        );
        console.log(messages);
        return (
            <div className="box">
                <div>
                    <div className="message">
                        <ReactCSSTranstionGroup
                        ref={input => this.message =input}
                         component="div"
                         className="message"
                         transitionName="message"
                         transitionEnterTimeout={200}
                         transitionLeaveTimeout={200}
                         >
                        {messages}
                        </ReactCSSTranstionGroup>
                    </div>
                
                <Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length={140}/>
            </div>
            </div>
        )
    };

    static propTypes = {
        params : React.PropTypes.object.isRequired
    }
}

export default App;
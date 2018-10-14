import React, { Component } from 'react'
import Message from './message'
 
class Chatbox extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            messages: [
                { message: "Hello", username: "Will"}
            ]
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.handleReceiveMessage = this.handleReceiveMessage.bind(this)
    }

    sendMessage(){
        this.props.client.message($('.chat_input').val());
    }

    handleReceiveMessage() {
        console.log("handle receive message")
        this.props.listenMessage(this.props.client)
    }

    componentDidMount(){
        this.handleReceiveMessage()
    }

    render() {
        console.log("this.props.messages: ", this.props.messages)
        const messages = this.props.messages || []
        return (
            <div className="chatbox col-md-12">
                <div className="panel">
                    <div className="panel-heading top-bar">
                        <div className="col-md-8">
                            <h3 className="panel-title"><span className="glyphicon glyphicon-comment"></span> Chat - Guru</h3>
                        </div>
                        <div className="col-md-4">
                            <a href="#"><span id="minim_chat_window" className="glyphicon glyphicon-minus icon_minim"></span></a>
                            <a href="#"><span className="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a>
                        </div>
                    </div>
                    <div className="panel-body msg_container_base">  
                        { 
                            messages.map((data, i) => <Message key={i} content= {data.message} username={data.username}/>)
                        }
                    </div>
                    <div className="panel-footer">
                        <div className="input-group">
                            <input id="btn-input" type="text" className="form-control input-sm chat_input" placeholder="Write your message here..." />
                            <span className="input-group-btn">
                            <button onClick={this.sendMessage} className="btn btn-primary btn-sm" id="btn-chat">Send</button>
                            </span>
                        </div>
                    </div>
                </div>                          
            </div>
        )
    }
}
export default Chatbox;


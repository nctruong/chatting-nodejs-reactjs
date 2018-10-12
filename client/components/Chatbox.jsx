import React, { Component } from 'react'
 
class Chatbox extends Component {
    constructor(props) {
        super(props)
        this.sendMessage = this.sendMessage.bind(this)
    }

    sendMessage(){
        this.props.client().message($('.chat_input').val());
    }

    render() {
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
                        <div className="row msg_container base_receive">
                            <div className="col-md-1 avatar">
                                <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive "/>
                            </div>
                            <div className="col-md-11">
                                <div className="messages msg_receive">
                                    <p>that mongodb thing looks good, huh?
                                    tiny master db, and huge document store</p>
                                    <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                </div>
                            </div>
                        </div>
                        <div className="row msg_container base_sent">
                            <div className="col-md-11">
                                <div className="messages msg_sent">
                                    <p>that mongodb thing looks good, huh?
                                    tiny master db, and huge document store</p>
                                    <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                </div>
                            </div>
                            <div className="col-md-1 avatar">
                                <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive "/>
                            </div>
                        </div>
                        <div className="row msg_container base_receive">
                            <div className="col-md-1 avatar">
                                <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive "/>
                            </div>
                            <div className="col-md-11">
                                <div className="messages msg_receive">
                                    <p>that mongodb thing looks good, huh?
                                    tiny master db, and huge document store</p>
                                    <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                </div>
                            </div>
                        </div>
                        <div className="row msg_container base_sent">
                            <div className="col-md-11">
                                <div className="messages msg_sent">
                                    <p>that mongodb thing looks good, huh?
                                    tiny master db, and huge document store</p>
                                    <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                </div>
                            </div>
                            <div className="col-md-1 avatar">
                                <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive "/>
                            </div>
                        </div>
                        <div className="row msg_container base_receive">
                            <div className="col-md-1 avatar">
                                <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive "/>
                            </div>
                            <div className="col-md-11">
                                <div className="messages msg_receive">
                                    <p>that mongodb thing looks good, huh?
                                    tiny master db, and huge document store</p>
                                    <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                </div>
                            </div>
                        </div>
                        <div className="row msg_container base_sent">
                            <div className="col-md-11">
                                <div className="messages msg_sent">
                                    <p>that mongodb thing looks good, huh?
                                    tiny master db, and huge document store</p>
                                    <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                </div>
                            </div>
                            <div className="col-md-1 avatar">
                                <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive "/>
                            </div>
                        </div>
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
                
                <div className="btn-group dropup">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        <span className="glyphicon glyphicon-cog"></span>
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                        <li><a href="#" id="new_chat"><span className="glyphicon glyphicon-plus"></span> Novo</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-list"></span> Ver outras</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-remove"></span> Fechar Tudo</a></li>
                        <li className="divider"></li>
                        <li><a href="#"><span className="glyphicon glyphicon-eye-close"></span> Invisivel</a></li>
                    </ul>
                </div>                                
            </div>
        )
    }
}
export default Chatbox;


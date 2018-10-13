import React, { Component } from 'react'
import styled from 'styled-components'

const MsgContainer = styled.div`
    padding: 10px;
    overflow: hidden;
    display: flex;
`

const MsgSent = styled.div`
    float: right;
    background: white;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    width: 100%;
`
class Message extends Component {
    render() {
        return (
            <MsgContainer className="row msg_container base_sent">
                <div className="col-md-11">
                    <MsgSent>
                        <p>{this.props.content}</p>
                        <time dateTime="2009-11-13T20:00">{this.props.username}</time>
                    </MsgSent>
                </div>
                <div className="col-md-1 avatar">
                    <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive "/>
                </div>
            </MsgContainer>
        )
    }
}
export default Message;
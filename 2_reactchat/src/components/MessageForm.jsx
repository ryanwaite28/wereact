import { useState } from "react";
import {sendOutlined, PictureOutlined } from '@ant-design/icons'
import { sendMessage,isTyping } from 'react-chat-engine'

const MessageInput = ({value, onChange, onSubmit }) => (
    <input 
    className="message-input"
    placeholder="semd a message"
    value={value}
    onChange={onChange}
    onSubmit={onSubmit}/>
)
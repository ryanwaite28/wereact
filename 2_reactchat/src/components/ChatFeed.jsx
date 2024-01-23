import React from 'react';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import ReadReceipt from './ReadReceipt'; // Assuming there's a ReadReceipt component

// Function component to render read receipts
const renderReadReceipts = React.memo((message, isMyMessage, chat) => (
  chat?.people.map((person, index) => person.last_read === message.id && (
    <ReadReceipt
      key={`read_${index}`}
      isMyMessage={isMyMessage}
      avatar={person.person.avatar}
    />
  ))
));

// Function component to render individual messages
const renderMessage = (message, isMyMessage, lastMessage, chat) => (
  <div key={`msg_${message.id}`} style={{ width: '100%' }}>
    <div className="message-block">
      {isMyMessage
        ? <MyMessage message={message} />
        : <TheirMessage message={message} lastMessage={lastMessage} />}
    </div>
    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
      {renderReadReceipts(message, isMyMessage, chat)}
    </div>
  </div>
);

// ChatFeed component to display chat messages and related UI
const ChatFeed = ({ chats = {}, activeChat, userName, messages = {}, ...props }) => {
  const chat = chats[activeChat];

  // Function to render chat messages
  const renderMessages = () => (
    Object.keys(messages).map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : Object.keys(messages)[index - 1];
      const isMyMessage = userName === message.sender.username;

      return renderMessage(message, isMyMessage, messages[lastMessageKey], chat);
    })
  );

  return (
    <div className="chat-feed">
      {/* Render chat title and subtitle if available */}
      {chat?.title && (
        <div className="chat-title-container">
          <div className="chat-title">{chat.title}</div>
          <div className="chat-subtitle">
            {chat.people.map((person) => ` ${person.person.username}`)}
          </div>
        </div>
      )}
      {/* Render chat messages */}
      {renderMessages()}
      {/* Render MessageForm component */}
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;

import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

// Input component for message input field
const MessageInput = ({ value, onChange, onSubmit }) => (
  <input
    className="message-input"
    placeholder="Send a message..."
    value={value}
    onChange={onChange}
    onSubmit={onSubmit}
  />
);

// Component for the upload button
const UploadButton = ({ onChange }) => (
  <>
    <label htmlFor="upload-button">
      <span className="image-button">
        <PictureOutlined className="picture-icon" alt="Upload Image" />
      </span>
    </label>
    <input
      type="file"
      multiple={false}
      id="upload-button"
      style={{ display: 'none' }}
      onChange={onChange}
    />
  </>
);

// Component for the send button
const SendButton = () => (
  <button type="submit" className="send-button">
    <SendOutlined className="send-icon" alt="Send Message" />
  </button>
);

// Main MessageForm component
const MessageForm = ({ chatId, creds }) => {
  // State for the message input value
  const [value, setValue] = useState('');

  // Handle input changes
  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping({ chatId, creds });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  // Handle file upload
  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      {/* Message input field */}
      <MessageInput value={value} onChange={handleChange} onSubmit={handleSubmit} />
      {/* Upload button for images */}
      <UploadButton onChange={handleUpload} />
      {/* Send button */}
      <SendButton />
    </form>
  );
};

export default MessageForm;

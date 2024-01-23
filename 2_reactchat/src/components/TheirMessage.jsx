import React from 'react';

// MyMessage component for displaying messages sent by the current user
const MyMessage = ({ message }) => {
  // Check if the message has attachments (e.g., images)
  const isImageMessage = message.attachments && message.attachments.length > 0;

  // Common styling for both image and text messages
  const commonStyle = {
    float: 'right',
    marginRight: '18px',
    color: 'white',
    backgroundColor: '#3B2A50',
  };

  return (
    <div className="message" style={{ ...commonStyle, ...(isImageMessage && { float: 'right' }) }}>
      {/* Conditional rendering for image or text message */}
      {isImageMessage ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
        />
      ) : (
        message.text
      )}
    </div>
  );
};

export default MyMessage;

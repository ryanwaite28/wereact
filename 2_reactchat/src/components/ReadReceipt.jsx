import React from 'react';

const ReadReceipt = ({ isMyMessage, avatar }) => (
  <div
    className="read-receipt"
    style={{
      float: isMyMessage ? 'right' : 'left',
      backgroundImage: avatar ? `url(${avatar})` : 'none',
    }}
  />
);

export default ReadReceipt;
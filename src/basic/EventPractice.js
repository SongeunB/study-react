import React from 'react';

const EventPractice = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    message: '',
  });
  const { username, message } = formData;

  const onChange = (e) => {
    const nextState = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(nextState);
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setFormData({
      username: '',
      message: '',
    });
  };

  return (
    <div>
      <h1>Event Practice</h1>
      <input
        type="text"
        name="username"
        placeholder="Type a username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="Type a message"
        value={message}
        onChange={onChange}
      />
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default EventPractice;

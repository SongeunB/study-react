import React from 'react';
import useInputs from './useInputs';

const Info = () => {
  const [state, onChange] = useInputs({ name: '', nickname: '' });
  const { name, nickname } = state;

  return (
    <div>
      <p>이름: {name}</p>
      <p>닉네임: {nickname}</p>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickname" value={nickname} onChange={onChange} />
    </div>
  );
};

export default Info;

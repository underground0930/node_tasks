import React from 'react';

const Child: React.FC = () => {
  return <div>{new Date().getTime()}</div>;
};

export default Child;

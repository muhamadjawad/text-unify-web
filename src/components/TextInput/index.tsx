import React from 'react';

type TextOutputProps = {
  value: string;
};

const TextOutput: React.FC<TextOutputProps> = ({ value }) => (
  <div className="textunify-output" style={{ minHeight: '50vh', width: '100%' }}>
    {value}
  </div>
);

export default TextOutput; 
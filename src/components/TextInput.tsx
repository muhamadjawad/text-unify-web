import React from 'react';

type TextInputProps = {
  value: string;
  onChange: (val: string) => void;
};

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => (
  <div className="textunify-input-wrapper">
    <textarea
      className="textunify-input"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Type your text here..."
      style={{ minHeight: '50vh', width: '100%', resize: 'vertical' }}
    />
  </div>
);

export default TextInput; 
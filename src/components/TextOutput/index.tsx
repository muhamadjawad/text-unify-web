import React from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { useUnicodeText } from '@/hooks/useUnicodeText';
import './TextOutput.css'

type TextOutputProps = {
  value: string;
};

const TextOutput: React.FC<TextOutputProps> = ({ value }) => {
  const unicodeValue = useUnicodeText(value);
  // Always convert to string for copying
  const unicodeString = Array.isArray(unicodeValue) ? unicodeValue.join('') : unicodeValue;

  const handleCopy = () => {
    navigator.clipboard.writeText(unicodeString);
  };

  return (
    <div className='textOutput-wrapper' >
      <div className="editor-toolbar" style={{ justifyContent: 'flex-end' }}>
        <button
          className="toolbar-btn"
          // style={{ marginLeft: 'auto' }}
          onClick={handleCopy}
          aria-label="Copy Unicode Text"
          type="button"
        >
          <FaRegCopy />
        </button>
      </div>
      <div
        className="textunify-output"
      >
        {unicodeValue}
      </div>
    </div>
  );
};

export default TextOutput; 
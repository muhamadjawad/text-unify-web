import React from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { useUnicodeText } from '@/hooks/useUnicodeText';

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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="editor-toolbar" style={{ justifyContent: 'flex-end', minHeight: 44, height: 44 }}>
        <button
          className="toolbar-btn"
          style={{ marginLeft: 'auto' }}
          onClick={handleCopy}
          aria-label="Copy Unicode Text"
          type="button"
        >
          <FaRegCopy />
        </button>
      </div>
      <div
        className="textunify-output"
        style={{ minHeight: '50vh', width: '100%', wordBreak: 'break-all', fontFamily: 'monospace', overflow: 'auto', flex: 1 }}
      >
        {unicodeValue}
      </div>
    </div>
  );
};

export default TextOutput; 
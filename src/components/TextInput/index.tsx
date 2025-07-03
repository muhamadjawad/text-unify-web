import React from 'react';
import { useUnicodeText } from '@/hooks/useUnicodeText';

type TextOutputProps = {
  value: string;
};

const TextOutput: React.FC<TextOutputProps> = ({ value }) => {
  const unicodeValue = useUnicodeText(value);
  return (
    <div className="textunify-output" style={{ minHeight: '50vh', width: '100%', wordBreak: 'break-all', fontFamily: 'monospace' }}>
      {unicodeValue}
    </div>
  );
};

export default TextOutput; 
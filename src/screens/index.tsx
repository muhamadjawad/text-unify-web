import React from 'react';
import Editor from '@/components/Editor';
import TextOutput from '@/components/TextOutput';
import './TextUnify.css';

const TextUnify: React.FC = () => {
  const [input, setInput] = React.useState<string>('');

  return (
    <div className="textunify-container">
      <div className="textunify-input-wrapper">
        <Editor value={input} onChange={setInput} />
      </div>
      <div className="textunify-output-wrapper">
        <TextOutput value={input} />
      </div>
    </div>
  );
};

export default TextUnify; 
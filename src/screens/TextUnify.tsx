import React from 'react';
import Editor from '@/components/Editor';
import TextOutput from '@/components/TextOutput';
import './TextUnify.css';

const TextUnify: React.FC = () => {
  const [input, setInput] = React.useState('yhe output');

  return (
    <div className="textunify-container">
      <Editor value={input} onChange={setInput} />
      <TextOutput value={input} />
    </div>
  );
};

export default TextUnify; 
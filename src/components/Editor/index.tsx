import React, { useRef, useEffect, useState } from 'react';
import EditorToolbar from '../EditorToolbar';
import './Editor.css';
import type { ToolbarAction } from '@/types';
import useTextEditor from '@/hooks/useTextEditor';

type EditorProps = {
    value: string;
    onChange: (val: string) => void;
};

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {

    const { handleAction, activeFormats, editorRef, handleInput } = useTextEditor({ value, onChange })

    return (
        <div className="editor-wrapper">
            <EditorToolbar onAction={handleAction} activeFormats={activeFormats} />
            <div
                ref={editorRef}
                className="editor-textarea"
                contentEditable
                suppressContentEditableWarning
                spellCheck={true}
                onInput={handleInput}
                style={{ height: '250px', width: '100%', resize: 'none', overflowY: 'auto', outline: 'none' }}
            />
        </div>
    );
};

export default Editor; 
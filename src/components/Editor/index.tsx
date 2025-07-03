import React, { useRef, useEffect, useState } from 'react';
import EditorToolbar from '../EditorToolbar';
import './Editor.css';
import type { ToolbarAction } from '@/types';

type EditorProps = {
    value: string;
    onChange: (val: string) => void;
};

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [activeFormats, setActiveFormats] = useState<{ [key in ToolbarAction]?: boolean }>({});

    // Sync contenteditable with value
    useEffect(() => {
        if (editorRef.current && editorRef.current.innerText !== value) {
            editorRef.current.innerText = value;
        }
    }, [value]);

    // Detect active formats on selection change
    const detectActiveFormats = () => {
        const formats: { [key in ToolbarAction]?: boolean } = {};
        if (document.queryCommandState('bold')) formats.bold = true;
        if (document.queryCommandState('italic')) formats.italic = true;
        if (document.queryCommandState('underline')) formats.underline = true;
        // Asterisk is custom, not native
        setActiveFormats(formats);
    };

    useEffect(() => {
        document.addEventListener('selectionchange', detectActiveFormats);
        return () => document.removeEventListener('selectionchange', detectActiveFormats);
    }, []);

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        onChange(e.currentTarget.innerText);
    };

    const handleAction = (action: ToolbarAction) => {
        if (!editorRef.current) return;
        editorRef.current.focus();
    
        switch (action) {
            case 'bold':
                document.execCommand('bold');
                break;
            case 'italic':
                document.execCommand('italic');
                break;
            case 'underline':
                document.execCommand('underline');
                break;
            case 'emoji':
                document.execCommand('insertText', false, '😊');
                break;
            case 'asterisk':
                document.execCommand('strikeThrough');
                break;
            default:
                break;
        }
    };
    

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
import React from 'react';
import EditorToolbar from './EditorToolbar';
import './Editor.css';
import type { ToolbarAction } from '@/types';

type EditorProps = {
    value: string;
    onChange: (val: string) => void;
};

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    //   Formatting actions
    const handleAction = (action: ToolbarAction) => {
        if (!textareaRef.current) return;
        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        let newValue = value;
        let insertBefore = '', insertAfter = '';
        switch (action) {
            case 'bold':
                insertBefore = '**'; insertAfter = '**';
                break;
            case 'italic':
                insertBefore = '*'; insertAfter = '*';
                break;
            case 'underline':
                insertBefore = '<u>';
                insertAfter = '</u>';
                break;
            case 'asterisk':
                insertBefore = '***'; insertAfter = '***';
                break;
            case 'emoji':
                insertBefore = '😊'; insertAfter = '';
                break;
            default:
                break;
        }
        newValue = value.slice(0, start) + insertBefore + value.slice(start, end) + insertAfter + value.slice(end);
        onChange(newValue);
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + insertBefore.length, end + insertBefore.length);
        }, 0);
    };

    return (
        <div className="editor-wrapper">
            <EditorToolbar onAction={handleAction} />
            <textarea
                ref={textareaRef}
                className="editor-textarea"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Type your text here..."
                style={{ height: '250px', width: '100%', resize: 'none' }}
            />
        </div>
    );
};

export default Editor; 
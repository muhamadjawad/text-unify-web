import React, { useRef, useEffect, useState } from 'react';
import type { ToolbarAction } from '@/types';

const useTextEditor = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [activeFormats, setActiveFormats] = useState<{ [key in ToolbarAction]?: boolean }>({});

    // Sync contenteditable with value (now HTML)
    useEffect(() => {
        if (editorRef.current && editorRef.current.innerHTML !== value) {
            editorRef.current.innerHTML = value;
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
        onChange(e.currentTarget.innerHTML);
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

    return { handleAction, activeFormats, editorRef, handleInput }
}

export default useTextEditor
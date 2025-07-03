import React, { useRef, useEffect, useState } from 'react';
import type { ToolbarAction } from '@/types';

const useTextEditor = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const toolbarRef = React.useRef<HTMLDivElement>(null);


    const [activeFormats, setActiveFormats] = useState<{ [key in ToolbarAction]?: boolean }>({});
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [lastRange, setLastRange] = useState<Range | null>(null);

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
        // Save selection for emoji insertion
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            setLastRange(selection.getRangeAt(0));
        }
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
                setShowEmojiPicker(v => !v);
                break;
            case 'asterisk':
                document.execCommand('strikeThrough');
                break;
            default:
                break;
        }
    };

    // Insert emoji at cursor
    const insertEmoji = (emoji: string) => {
        setShowEmojiPicker(false);
        if (!editorRef.current) return;
        editorRef.current.focus();
        let range = lastRange;
        if (!range) {
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
                range = selection.getRangeAt(0);
            }
        }
        if (range) {
            range.deleteContents();
            range.insertNode(document.createTextNode(emoji));
            // Move cursor after emoji
            range.collapse(false);
            const sel = window.getSelection();
            if (sel) {
                sel.removeAllRanges();
                sel.addRange(range);
            }
        } else {
            document.execCommand('insertText', false, emoji);
        }
        // Update value
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    return {
        handleAction,
        activeFormats,
        editorRef,
        handleInput,
        showEmojiPicker,
        setShowEmojiPicker,
        insertEmoji,
        toolbarRef
    }
}

export default useTextEditor

import React from 'react';
import EditorToolbar from '../EditorToolbar';
import './Editor.css';
import type { ToolbarAction } from '@/types';
import useTextEditor from '@/hooks/useTextEditor';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

type EditorProps = {
    value: string;
    onChange: (val: string) => void;
};

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
    const { handleAction, activeFormats, editorRef, handleInput, showEmojiPicker, setShowEmojiPicker, insertEmoji, toolbarRef } = useTextEditor({ value, onChange });

    return (
        <div className="editor-wrapper" style={{ position: 'relative' }}>
            <div ref={toolbarRef} style={{ position: 'relative' }}>
                <EditorToolbar onAction={handleAction} activeFormats={activeFormats} />
                {showEmojiPicker && (
                    <div style={{ position: 'absolute', top: 44, right: 0, zIndex: 10 }}>
                        <Picker
                            data={data}
                            onEmojiSelect={(emoji: any) => insertEmoji(emoji.native)}
                            theme="light"
                        />
                    </div>
                )}
            </div>
            <div
                ref={editorRef}
                className="editor-textarea"
                contentEditable
                suppressContentEditableWarning
                spellCheck={true}
                onInput={handleInput}
                style={{}}
            />
        </div>
    );
};

export default Editor; 
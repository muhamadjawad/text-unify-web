import React from 'react';
import { FaBold, FaItalic, FaUnderline, FaAsterisk, FaSmile } from 'react-icons/fa';
import './EditorToolbar.css';
import type { ToolbarAction } from '@/types';

type EditorToolbarProps = {
    onAction: (action: ToolbarAction) => void;
    activeFormats?: { [key in ToolbarAction]?: boolean };
};

const actions: { action: ToolbarAction; icon: React.ReactNode; label: string }[] = [
    { action: 'bold', icon: <FaBold />, label: 'Bold' },
    { action: 'italic', icon: <FaItalic />, label: 'Italic' },
    { action: 'underline', icon: <FaUnderline />, label: 'Underline' },
    { action: 'asterisk', icon: <FaAsterisk />, label: 'Asterisk' },
    { action: 'emoji', icon: <FaSmile />, label: 'Emoji' },
];

const EditorToolbar: React.FC<EditorToolbarProps> = ({ onAction, activeFormats = {} }) => {
    return (
        <div className="editor-toolbar">
            {actions.map(({ action, icon, label }) => (
                <button
                    key={action}
                    className={`toolbar-btn${activeFormats[action] ? ' active' : ''}`}
                    onClick={() => onAction(action)}
                    type="button"
                    aria-label={label}
                >
                    {icon}
                </button>
            ))}
        </div>
    );
};

export default EditorToolbar; 
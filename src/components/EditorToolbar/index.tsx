import React, { useState } from 'react';
import { FaBold, FaItalic, FaUnderline, FaAsterisk, FaSmile } from 'react-icons/fa';
import './EditorToolbar.css';
import type { ToolbarAction } from '@/types';


type EditorToolbarProps = {
    onAction: (action: ToolbarAction) => void;
};

const actions: { action: ToolbarAction; icon: React.ReactNode; label: string }[] = [
    { action: 'bold', icon: <FaBold />, label: 'Bold' },
    { action: 'italic', icon: <FaItalic />, label: 'Italic' },
    { action: 'underline', icon: <FaUnderline />, label: 'Underline' },
    { action: 'asterisk', icon: <FaAsterisk />, label: 'Asterisk' },
    { action: 'emoji', icon: <FaSmile />, label: 'Emoji' },
];

const EditorToolbar: React.FC<EditorToolbarProps> = ({ onAction }) => {
    const [active, setActive] = useState<ToolbarAction | null>(null);

    const handleClick = (action: ToolbarAction) => {
        setActive(action);
        onAction(action);
        setTimeout(() => setActive(null), 300);
    };

    return (
        <div className="editor-toolbar">
            {actions.map(({ action, icon, label }) => (
                <button
                    key={action}
                    className={`toolbar-btn${active === action ? ' active' : ''}`}
                    onClick={() => handleClick(action)}
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
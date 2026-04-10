import React, { useState } from 'react';
import { AlertTriangle, Lightbulb, BookOpen, Compass, Wrench, Code, ChevronDown } from 'lucide-react';

// Types matching the backend CodeFeedbackBlock schema
export interface HintItem {
    level: number; // 1 to 5
    text: string;
}

export interface CodeFeedbackBlock {
    block_start_line: number;
    block_end_line: number;
    flaw_summary: string;
    hints: HintItem[];
}

interface ProgressiveHintCardProps {
    feedbackBlock: CodeFeedbackBlock;
    index: number;
    onHover: (startLine: number, endLine: number) => void;
    onLeave: () => void;
    isActive: boolean;
}

// Icon and label for each hint level
const HINT_LEVEL_CONFIG: Record<number, {
    icon: React.ReactNode;
    label: string;
    accentColor: string;
    bgColor: string;
    borderColor: string;
    darkBgColor: string;
    darkBorderColor: string;
}> = {
    1: {
        icon: <Lightbulb size={14} />,
        label: 'Think About It',
        accentColor: 'text-amber-600 dark:text-amber-400',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        darkBgColor: 'dark:bg-amber-950/30',
        darkBorderColor: 'dark:border-amber-800/40',
    },
    2: {
        icon: <BookOpen size={14} />,
        label: 'Core Concept',
        accentColor: 'text-blue-600 dark:text-blue-400',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        darkBgColor: 'dark:bg-blue-950/30',
        darkBorderColor: 'dark:border-blue-800/40',
    },
    3: {
        icon: <Compass size={14} />,
        label: 'Directional Clue',
        accentColor: 'text-purple-600 dark:text-purple-400',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        darkBgColor: 'dark:bg-purple-950/30',
        darkBorderColor: 'dark:border-purple-800/40',
    },
    4: {
        icon: <Wrench size={14} />,
        label: 'Strategy',
        accentColor: 'text-emerald-600 dark:text-emerald-400',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        darkBgColor: 'dark:bg-emerald-950/30',
        darkBorderColor: 'dark:border-emerald-800/40',
    },
    5: {
        icon: <Code size={14} />,
        label: 'Code Fix',
        accentColor: 'text-red-600 dark:text-red-400',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        darkBgColor: 'dark:bg-red-950/30',
        darkBorderColor: 'dark:border-red-800/40',
    },
};

const ProgressiveHintCard: React.FC<ProgressiveHintCardProps> = ({
    feedbackBlock,
    index,
    onHover,
    onLeave,
    isActive,
}) => {
    const [revealedHints, setRevealedHints] = useState(1);

    // Sort hints by level
    const sortedHints = [...feedbackBlock.hints].sort((a, b) => a.level - b.level);

    const handleRevealNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (revealedHints < 5) {
            setRevealedHints(prev => prev + 1);
        }
    };

    return (
        <div
            id={`feedback-card-${index}`}
            className={`
                rounded-xl border transition-all duration-300 ease-in-out cursor-pointer
                ${isActive
                    ? 'border-red-400/60 dark:border-red-500/40 shadow-lg shadow-red-500/10 dark:shadow-red-500/5 scale-[1.01]'
                    : 'border-gray-200 dark:border-[#2a2a2a] hover:border-gray-300 dark:hover:border-[#3a3a3a] shadow-sm'
                }
                bg-white dark:bg-[#1a1a1a]
                overflow-hidden
            `}
            onMouseEnter={() => onHover(feedbackBlock.block_start_line, feedbackBlock.block_end_line)}
            onMouseLeave={onLeave}
        >
            {/* Card Header */}
            <div className={`
                px-4 py-3 border-b transition-colors duration-300
                ${isActive
                    ? 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/30'
                    : 'bg-gray-50 dark:bg-[#222222] border-gray-100 dark:border-[#2a2a2a]'
                }
            `}>
                <div className="flex items-start gap-2">
                    <div className={`
                        flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold
                        ${isActive
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-300 dark:bg-[#444444] text-gray-700 dark:text-gray-300'
                        }
                    `}>
                        {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                            {feedbackBlock.flaw_summary}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Lines {feedbackBlock.block_start_line}–{feedbackBlock.block_end_line}
                        </p>
                    </div>
                </div>
            </div>

            {/* Hints Container */}
            <div className="px-4 py-3 space-y-2">
                {sortedHints.map((hint) => {
                    const config = HINT_LEVEL_CONFIG[hint.level];
                    const isRevealed = hint.level <= revealedHints;
                    const isLatest = hint.level === revealedHints;

                    if (!config) return null;

                    return (
                        <div
                            key={hint.level}
                            className={`
                                transition-all duration-500 ease-in-out overflow-hidden
                                ${isRevealed ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                            `}
                        >
                            {/* Level 5: Special dark code-block style with warning */}
                            {hint.level === 5 ? (
                                <div className={`
                                    rounded-lg border-2 overflow-hidden
                                    ${isLatest ? 'animate-pulse-once' : ''}
                                    border-red-300 dark:border-red-700/60
                                `}>
                                    <div className="flex items-center gap-2 px-3 py-2 bg-red-100 dark:bg-red-950/40 border-b border-red-200 dark:border-red-800/40">
                                        <AlertTriangle size={14} className="text-red-600 dark:text-red-400 flex-shrink-0" />
                                        <span className="text-xs font-semibold text-red-700 dark:text-red-300 uppercase tracking-wider">
                                            {config.label} — Spoiler
                                        </span>
                                    </div>
                                    <div className="px-3 py-3 bg-gray-900 dark:bg-[#0d0d0d]">
                                        <pre className="text-xs text-green-400 dark:text-green-300 font-mono whitespace-pre-wrap leading-relaxed">
                                            {hint.text}
                                        </pre>
                                    </div>
                                </div>
                            ) : (
                                <div className={`
                                    rounded-lg border px-3 py-2.5
                                    ${config.bgColor} ${config.darkBgColor}
                                    ${config.borderColor} ${config.darkBorderColor}
                                    ${isLatest ? 'ring-1 ring-offset-1 ring-offset-white dark:ring-offset-[#1a1a1a]' : ''}
                                    ${isLatest && hint.level === 1 ? 'ring-amber-300 dark:ring-amber-600' : ''}
                                    ${isLatest && hint.level === 2 ? 'ring-blue-300 dark:ring-blue-600' : ''}
                                    ${isLatest && hint.level === 3 ? 'ring-purple-300 dark:ring-purple-600' : ''}
                                    ${isLatest && hint.level === 4 ? 'ring-emerald-300 dark:ring-emerald-600' : ''}
                                `}>
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <span className={config.accentColor}>
                                            {config.icon}
                                        </span>
                                        <span className={`text-[10px] font-semibold uppercase tracking-wider ${config.accentColor}`}>
                                            Hint {hint.level} — {config.label}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                                        {hint.text}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Reveal More Button */}
            {revealedHints < 5 && (
                <div className="px-4 pb-3">
                    <button
                        onClick={handleRevealNext}
                        className={`
                            w-full flex items-center justify-center gap-2
                            px-4 py-2 rounded-lg text-sm font-medium
                            transition-all duration-200 cursor-pointer
                            bg-gray-100 dark:bg-[#252525]
                            hover:bg-gray-200 dark:hover:bg-[#333333]
                            text-gray-700 dark:text-gray-300
                            hover:text-gray-900 dark:hover:text-white
                            border border-gray-200 dark:border-[#3a3a3a]
                            hover:border-gray-300 dark:hover:border-[#4a4a4a]
                            active:scale-[0.98]
                        `}
                        aria-label={`Reveal hint ${revealedHints + 1} of 5`}
                    >
                        <span>Still stuck? Reveal Hint {revealedHints + 1}/5</span>
                        <ChevronDown size={14} className="animate-bounce" />
                    </button>
                </div>
            )}

            {/* All hints revealed indicator */}
            {revealedHints >= 5 && (
                <div className="px-4 pb-3">
                    <div className="text-center text-xs text-gray-400 dark:text-gray-500 py-1">
                        All hints revealed — try applying the fix!
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProgressiveHintCard;

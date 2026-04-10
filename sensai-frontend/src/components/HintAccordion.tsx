"use client";

import React, { useMemo, useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";

interface HintAccordionProps {
    hints?: string[] | null;
    className?: string;
}

const HintAccordion: React.FC<HintAccordionProps> = ({ hints, className = "" }) => {
    const normalizedHints = useMemo(() => {
        if (!hints || !Array.isArray(hints)) {
            return [] as string[];
        }
        return hints.filter((hint) => typeof hint === "string" && hint.trim().length > 0).slice(0, 3);
    }, [hints]);

    const [isOpen, setIsOpen] = useState(false);
    const [revealedLevels, setRevealedLevels] = useState<boolean[]>([false, false, false]);
    const [showLevel3Warning, setShowLevel3Warning] = useState(false);

    const canRevealLevel = (levelIndex: number) => {
        if (levelIndex === 0) {
            return true;
        }
        return revealedLevels[levelIndex - 1];
    };

    const handleReveal = (levelIndex: number) => {
        if (!canRevealLevel(levelIndex)) {
            return;
        }
        if (levelIndex === 2 && !revealedLevels[2]) {
            setShowLevel3Warning(true);
            return;
        }
        setRevealedLevels((prev) => {
            const next = [...prev];
            next[levelIndex] = true;
            return next;
        });
    };

    const confirmRevealLevel3 = () => {
        setShowLevel3Warning(false);
        setRevealedLevels((prev) => {
            const next = [...prev];
            next[2] = true;
            return next;
        });
    };

    return (
        <div className={`mt-3 rounded-lg border border-gray-200 dark:border-zinc-800 ${className}`}>
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-900 dark:text-white"
            >
                <span>Need Help?</span>
                <span className="text-gray-500 dark:text-zinc-400">
                    {isOpen ? "Hide" : "Show"}
                </span>
            </button>

            {isOpen && (
                <div className="px-3 pb-3 space-y-2">
                    {normalizedHints.length === 0 ? (
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                            Hints are not available for this feedback.
                        </div>
                    ) : (
                        normalizedHints.map((hint, index) => {
                            const level = index + 1;
                            const isRevealed = revealedLevels[index];
                            const canReveal = canRevealLevel(index);
                            const buttonLabel = isRevealed ? `Level ${level} Hint` : `Reveal Level ${level} Hint`;

                            return (
                                <div key={`hint-level-${level}`} className="rounded-md border border-gray-200 dark:border-zinc-800">
                                    <button
                                        type="button"
                                        onClick={() => handleReveal(index)}
                                        disabled={!canReveal}
                                        className={`w-full flex items-center justify-between px-3 py-2 text-xs ${canReveal ? "text-slate-900 dark:text-white" : "text-gray-400"}`}
                                    >
                                        <span>{buttonLabel}</span>
                                        {!canReveal && <span className="text-[10px]">Unlock previous hint</span>}
                                    </button>
                                    {isRevealed && (
                                        <div className="px-3 pb-3 text-xs text-gray-700 dark:text-gray-300">
                                            {hint}
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>
            )}

            <ConfirmationDialog
                open={showLevel3Warning}
                onCancel={() => setShowLevel3Warning(false)}
                onConfirm={confirmRevealLevel3}
                title="Reveal Level 3 Hint?"
                message="This hint is a direct fix. Try Levels 1 and 2 first if you want to solve it yourself."
                confirmButtonText="Show Level 3"
                cancelButtonText="Keep Trying"
                type="custom"
            />
        </div>
    );
};

export default HintAccordion;

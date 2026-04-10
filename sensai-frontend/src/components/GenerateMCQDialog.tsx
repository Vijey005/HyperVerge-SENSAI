"use client"

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Sparkles } from 'lucide-react';

interface GenerateMCQDialogProps {
    open: boolean;
    onClose: () => void;
    onGenerate: (material: string, numQuestions: number, difficulty: string) => Promise<void>;
    materials?: { id: string; title: string; content?: any[] }[];
}

export default function GenerateMCQDialog({ open, onClose, onGenerate, materials }: GenerateMCQDialogProps) {
    const [material, setMaterial] = useState('');
    const [selectedMaterialId, setSelectedMaterialId] = useState<string>('');
    const [numQuestions, setNumQuestions] = useState(15);
    const [difficulty, setDifficulty] = useState('medium');
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Simple block text extractor since we only need raw text for the LLM
    const extractText = (blocks: any[]): string => {
        if (!Array.isArray(blocks)) return "";
        let text = "";
        for (const block of blocks) {
            if (block.content && Array.isArray(block.content)) {
                for (const inline of block.content) {
                    if (inline.type === "text" && inline.text) {
                        text += inline.text + " ";
                    }
                }
            }
            text += "\n";
            if (block.children) {
                text += extractText(block.children);
            }
        }
        return text;
    };

    const handleSubmit = async () => {
        let finalMaterialContent = material;

        if (materials && materials.length > 0 && selectedMaterialId) {
            const selectedMat = materials.find(m => m.id === selectedMaterialId);
            if (selectedMat && selectedMat.content) {
                finalMaterialContent = extractText(selectedMat.content);
            }
        }

        if (!finalMaterialContent || !finalMaterialContent.trim()) {
            setError('Please provide some reference material or select a topic');
            return;
        }

        setIsGenerating(true);
        setError(null);
        
        try {
            await onGenerate(finalMaterialContent, numQuestions, difficulty);
            // reset state
            setMaterial('');
            setSelectedMaterialId('');
            setDifficulty('medium');
            setNumQuestions(15);
            onClose();
        } catch (err: any) {
            setError(err.message || 'Failed to generate MCQs');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/70" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-[#1A1A1A] shadow-xl transition-all">
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <Dialog.Title as="h3" className="text-xl font-medium text-white flex items-center">
                                            <Sparkles className="mr-2 text-purple-400" size={20} />
                                            Generate AI MCQs
                                        </Dialog.Title>
                                        <button onClick={onClose} className="text-gray-400 hover:text-white">
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        {materials && materials.length > 0 ? (
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Select Published Topic / Material
                                                </label>
                                                <select
                                                    className="w-full px-3 py-2 bg-[#0D0D0D] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                    value={selectedMaterialId}
                                                    onChange={(e) => setSelectedMaterialId(e.target.value)}
                                                    disabled={isGenerating}
                                                >
                                                    <option value="">-- Custom material (use text box) --</option>
                                                    {materials.map(m => (
                                                        <option key={m.id} value={m.id}>{m.title}</option>
                                                    ))}
                                                </select>
                                                {!selectedMaterialId && (
                                                    <textarea
                                                        className="mt-3 w-full h-32 px-3 py-2 bg-[#0D0D0D] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                        placeholder="Or paste custom material here..."
                                                        value={material}
                                                        onChange={(e) => setMaterial(e.target.value)}
                                                        disabled={isGenerating}
                                                    />
                                                )}
                                            </div>
                                        ) : (
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Reference Material
                                                </label>
                                                <textarea
                                                    className="w-full h-40 px-3 py-2 bg-[#0D0D0D] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                    placeholder="Paste the course material here..."
                                                    value={material}
                                                    onChange={(e) => setMaterial(e.target.value)}
                                                    disabled={isGenerating}
                                                />
                                            </div>
                                        )}

                                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                                        
                                        <div className="flex gap-4">
                                            <div className="flex-1">
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Number of Questions
                                                </label>
                                                <input
                                                    type="number"
                                                    className="w-full px-3 py-2 bg-[#0D0D0D] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                    value={numQuestions}
                                                    onChange={(e) => setNumQuestions(Number(e.target.value))}
                                                    min={1}
                                                    max={50}
                                                    disabled={isGenerating}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Difficulty
                                                </label>
                                                <select
                                                    className="w-full px-3 py-2 bg-[#0D0D0D] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                    value={difficulty}
                                                    onChange={(e) => setDifficulty(e.target.value)}
                                                    disabled={isGenerating}
                                                >
                                                    <option value="easy">Easy</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="hard">Hard</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex justify-end">
                                        <button
                                            onClick={onClose}
                                            className="px-4 py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-colors mr-3"
                                            disabled={isGenerating}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleSubmit}
                                            className="px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-colors flex items-center"
                                            disabled={isGenerating}
                                        >
                                            {isGenerating ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                                                    Generating...
                                                </>
                                            ) : (
                                                'Generate MCQs'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

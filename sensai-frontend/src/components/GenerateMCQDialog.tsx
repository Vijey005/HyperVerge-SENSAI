"use client"

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Sparkles } from 'lucide-react';

interface GenerateMCQDialogProps {
    open: boolean;
    onClose: () => void;
    onGenerate: (material: string, numQuestions: number) => Promise<void>;
}

export default function GenerateMCQDialog({ open, onClose, onGenerate }: GenerateMCQDialogProps) {
    const [material, setMaterial] = useState('');
    const [numQuestions, setNumQuestions] = useState(15);
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        if (!material.trim()) {
            setError('Please provide some reference material');
            return;
        }

        setIsGenerating(true);
        setError(null);
        
        try {
            await onGenerate(material, numQuestions);
            // reset state
            setMaterial('');
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
                                            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                                        </div>

                                        <div>
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

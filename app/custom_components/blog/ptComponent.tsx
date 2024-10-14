"use client";

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, value }: { language: string; value: string }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative">
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm"
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                    padding: '1.5em',
                    borderRadius: '0.5em',
                    fontSize: '0.9em',
                }}
            >
                {value}
            </SyntaxHighlighter>
        </div>
    );
};

export const ptComponents = {
    types: {
        code: ({ value }: { value: { language?: string; code: string } }) => {
            if (value && value.language) {
                return <CodeBlock language={value.language} value={value.code} />;
            }
            return <pre>{value.code}</pre>;
        },
    },
    // ... other component definitions ...
};
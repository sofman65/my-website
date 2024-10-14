"use client";

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodeBlock({ codeExample }: { codeExample: { language: string; code: string } }) {
  return (
    <SyntaxHighlighter
      language={codeExample.language}
      style={vscDarkPlus}
      wrapLines
    >
      {codeExample.code}
    </SyntaxHighlighter>
  );
}

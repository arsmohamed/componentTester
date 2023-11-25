import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const TextEditor = ({ onCodeChange }) => {
    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
      );

  return (
    <div>
      <h2>Paste Component Code:</h2>
      <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
    </div>
  );
};

export default TextEditor;

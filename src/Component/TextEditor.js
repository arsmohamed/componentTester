import React,  { useState } from 'react';
import '../Styling/TextEditor.css'
import Editor from '@monaco-editor/react';

const TextEditor = () => {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`); // Code content state

  const handleEditorChange = (value, event) => {
    setCode(value);
  };


  return (
    <div className='text_editor_container'>
      <h2 className='text_editor_title'>Paste Component Code:</h2>
      <div className="text_editor">
        <Editor
          height="90vh" // Set height to take 90% of the parent
          language="javascript"
          value={code}
          theme="vs-dark"
          onChange={handleEditorChange}
          options={{
            automaticLayout: true, // Adjust the editor layout automatically
            scrollbar: {
              verticalScrollbarSize: 6, // Adjust scrollbar size
            },
          }}
        />
      </div>
    </div>
  );
};

export default TextEditor;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Editor from '@monaco-editor/react';
import { updateCode } from '../Redux/actions/codeActions';
import '../Styling/TextEditor.css';

const TextEditor = () => {
  const code = useSelector(state => state.code.code);
  const dispatch = useDispatch();

  const handleEditorChange = (value, event) => {
    dispatch(updateCode(value)); // Dispatch action to update code in Redux store
  };

  return (
    <div className='text_editor_container dark-background'>
      <h2 className='text_editor_title'>Paste Component Code:</h2>
      <div className="text_editor">
        <Editor
          height="90vh"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={{
            automaticLayout: true,
            scrollbar: {
              verticalScrollbarSize: 6,
            },
          }}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default TextEditor;

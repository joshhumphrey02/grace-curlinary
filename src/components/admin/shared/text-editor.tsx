import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React from 'react';

interface TextEditorProps extends ReactQuillProps {}

const TextEditor = (props: TextEditorProps) => {
	return <ReactQuill theme="snow" {...props} />;
};

export default TextEditor;

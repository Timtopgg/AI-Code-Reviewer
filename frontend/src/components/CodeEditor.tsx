import Editor from "@monaco-editor/react";

type CodeEditorProps = {
  code: string;
  language: string;
  onCodeChange: (value: string) => void;
};

function CodeEditor({
  code,
  language,
  onCodeChange,
}: CodeEditorProps) {
  return (
    <Editor
      height="500px"
      language={language}
      theme="vs-dark"
      value={code}
      onChange={(value) => onCodeChange(value || "")}
      options={{
        minimap: {
          enabled: false,
        },
        wordWrap: "on",
        automaticLayout: true,
        fontSize: 15,
      }}
    />
  );
}

export default CodeEditor;
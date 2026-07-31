import { useState } from "react";

type Props = {
  onFileLoaded: (content: string, language: string) => void;
};

function FileUpload({ onFileLoaded }: Props) {
  const [fileName, setFileName] = useState("No file selected");

  const extensionMap: Record<string, string> = {
    py: "python",
    js: "javascript",
    ts: "typescript",
    tsx: "typescript",
    jsx: "javascript",
    java: "java",
    cpp: "cpp",
    c: "c",
    cs: "csharp",
    go: "go",
    rs: "rust",
    php: "php",
    rb: "ruby",
    swift: "swift",
    kt: "kotlin",
    dart: "dart",
    html: "html",
    css: "css",
    json: "json",
  };

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target?.result as string;
      const extension = file.name.split(".").pop()?.toLowerCase() || "";
      const language = extensionMap[extension] || "plaintext";

      onFileLoaded(content, language);
    };

    reader.readAsText(file);
  }

  return (
    <div className="file-upload">
      <label className="upload-button">
        Choose File
        <input
          type="file"
          hidden
          onChange={handleFile}
        />
      </label>

      <div className="file-name">
        {fileName}
      </div>
    </div>
  );
}

export default FileUpload;
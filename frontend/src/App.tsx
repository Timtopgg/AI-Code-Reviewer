import { useState } from "react";
import Header from "./components/Header";
import LanguageSelector from "./components/LanguageSelector";
import FileUpload from "./components/FileUpload";
import CodeEditor from "./components/CodeEditor";
import ReviewPanel from "./components/ReviewPanel";
import { reviewCode as fetchReview } from "./services/api";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleFileLoaded(content: string, language: string) {
    setCode(content);
    setLanguage(language);
  }

  async function reviewCode() {
    setLoading(true);
    setError("");
    setReview("");

    try {
      const result = await fetchReview(code, language);
      setReview(result.review);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function clearEditor() {
    setCode("");
    setReview("");
    setError("");
  }

  return (
    <>
      <div className="background"></div>

      <Header title="AI Code Reviewer" />

      <div className="container">
        <div className="left-panel">
          <div className="language-selector-container">
            <LanguageSelector
              language={language}
              onLanguageChange={setLanguage}
            />
          </div>

          <FileUpload onFileLoaded={handleFileLoaded} />

          <CodeEditor
            code={code}
            language={language}
            onCodeChange={setCode}
          />

          <button onClick={reviewCode} disabled={loading}>
            {loading ? "Reviewing..." : "Review Code"}
          </button>

          <button
            onClick={clearEditor}
            disabled={loading}
            className="clear-button"
          >
            Clear
          </button>
        </div>

        <ReviewPanel review={review} error={error} />
      </div>
    </>
  );
}

export default App;
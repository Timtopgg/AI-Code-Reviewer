import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

type Props = {
  review: string;
  error: string;
};

function ReviewPanel({ review, error }: Props) {
  const [copied, setCopied] = useState(false);

  async function copyReview() {
    if (!review) return;

    await navigator.clipboard.writeText(review);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="right-panel">
      <div className="review-header">
        <h2>AI Review</h2>

        {review && (
          <button
            className="copy-button"
            onClick={copyReview}
          >
            {copied ? "✅ Copied!" : "📋 Copy Review"}
          </button>
        )}
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {!review && !error && (
        <div className="empty-review">
          AI review will appear here.
        </div>
      )}

      {review && (
        <div className="markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {review}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default ReviewPanel;
import React, { useState } from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './FeedbackWidget.module.css';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function ThumbUpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function ThumbDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}

export default function FeedbackWidget(): React.ReactElement | null {
  const { pathname } = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  function sendFeedback(helpful: boolean, text?: string) {
    if (window.gtag) {
      window.gtag('event', 'doc_feedback', {
        page_path: pathname,
        helpful: helpful ? 'yes' : 'no',
        ...(text ? { feedback_text: text.slice(0, 100) } : {}),
      });
    }
    setSubmitted(true);
  }

  function handleThumbsUp() {
    sendFeedback(true);
  }

  function handleThumbsDown() {
    setShowTextInput(true);
  }

  function handleSubmitText() {
    sendFeedback(false, feedbackText);
  }

  function handleSkipText() {
    sendFeedback(false);
  }

  if (submitted) {
    return (
      <div className={styles.container}>
        <p className={styles.thanks}>Thanks for your feedback!</p>
      </div>
    );
  }

  if (showTextInput) {
    return (
      <div className={styles.containerColumn}>
        <p className={styles.prompt}>What could we improve?</p>
        <div className={styles.textInputRow}>
          <input
            type="text"
            className={styles.textInput}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value.slice(0, 100))}
            maxLength={100}
            placeholder="Optional — tell us briefly"
          />
          <button className={styles.submitButton} onClick={handleSubmitText}>
            Send
          </button>
        </div>
        <button className={styles.skipButton} onClick={handleSkipText}>
          Skip
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.prompt}>Was this page helpful?</p>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={handleThumbsUp}
          aria-label="Yes, this page was helpful"
        >
          <ThumbUpIcon />
        </button>
        <button
          className={styles.button}
          onClick={handleThumbsDown}
          aria-label="No, this page was not helpful"
        >
          <ThumbDownIcon />
        </button>
      </div>
    </div>
  );
}

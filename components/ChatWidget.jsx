'use client';

import '../styles/chat-widget.css';

export default function ChatWidget() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };

  return (
    <button
      className="chat-trigger"
      onClick={handleClick}
      aria-label="Otwórz chat"
      title="Napisz do mnie — odpiszę na żywo"
    >
      <span className="chat-trigger-dot" aria-hidden="true" />
      <svg
        className="chat-trigger-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
      >
        {/* Chat bubble */}
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  );
}

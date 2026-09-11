import { useEffect } from "react";

/**
 * Simple auto-dismissing toast, fixed to the top-right corner.
 *
 * Usage:
 *   <Toast message="Saved!" onClose={() => setMsg(null)} />
 */
const Toast = ({ message, onClose, duration = 4000 }) => {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="toast toast--success" role="status">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>

      <span>{message}</span>

      <button
        type="button"
        className="toast-close-btn"
        aria-label="Dismiss"
        onClick={onClose}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
};

export default Toast;

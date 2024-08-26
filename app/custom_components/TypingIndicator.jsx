// Typing Indicator Component
const TypingIndicator = () => (
    <div className="flex items-center gap-2">
        <div className="dot-flashing"></div>
        <span className="text-sm text-gray-500">Typing...</span>
        <style jsx>{`
        .dot-flashing {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #000;
          animation: dot-flashing 1s infinite linear alternate;
          animation-delay: 0.5s;
        }
  
        @keyframes dot-flashing {
          0% {
            background-color: #000;
          }
          50%,
          100% {
            background-color: #ccc;
          }
        }
      `}</style>
    </div>
);

export default TypingIndicator;
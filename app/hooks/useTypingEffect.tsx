import { useState, useEffect } from 'react';

export const useTypingEffect = (fullText: string, startTyping: boolean) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (startTyping) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText((prev) => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [fullText, startTyping]);

  return typedText;
};
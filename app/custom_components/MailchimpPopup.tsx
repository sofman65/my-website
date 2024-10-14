"use client"; // This ensures the component is treated as a client component

import { useEffect } from 'react';

export default function MailchimpPopup() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://chimpstatic.com/mcjs-connected/js/users/159b3359b995e6f2594afe077/30de02070f11678116376bb95.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component just injects the script, no UI to render
}

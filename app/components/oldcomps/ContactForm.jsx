import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/ContactForm.css'; 

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mjvnkglb");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Reset form and state after successful submission
  const resetForm = () => {
    setFormSubmitted(false);
  };

  if (state.succeeded && !formSubmitted) {
    return (
      <div className="SuccessMessage">
        <p>Thanks for your message! I'll get back to you soon.</p>
        <button onClick={resetForm}>Send another message</button>
      </div>
    );
  }

  return (
    <section id="contact" className="ContactForm">
      <h2>Contact Me</h2>
      <form onSubmit={(e) => {
        handleSubmit(e).then(() => {
          if (state.succeeded) {
            setFormSubmitted(true);
          }
        });
      }}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </section>
  );
}

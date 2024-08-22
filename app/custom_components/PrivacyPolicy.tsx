// app/privacy-policy/page.tsx
"use client";

import styled from 'styled-components';

const PrivacyPolicyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #555;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PrivacyPolicy = () => {
    return (
        <PrivacyPolicyContainer>
            <h1>Privacy Policy</h1>
            <p><strong>Effective date:</strong> August 21, 2024</p>
            <p><strong>Last updated:</strong> August 21, 2024</p>
            <p>
                This Privacy Policy outlines the policies and practices regarding the collection, use, and protection of your personal information when you visit and interact with my website at <a href="https://main.d2maainag7y13x.amplifyapp.com/">https://main.d2maainag7y13x.amplifyapp.com/</a> (the “Website”).
            </p>

            <h2>Information We Collect</h2>
            <p>
                When you visit the Website, we may collect certain information about you, including:
            </p>
            <ul>
                <li><strong>Personal Information:</strong> This includes any information you voluntarily provide through forms on the Website, such as your name, email address, or other contact details.</li>
                <li><strong>Usage Data:</strong> We may automatically collect information about how you access and use the Website, including your IP address, browser type, pages visited, and the time and date of your visit.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
                The information collected on this Website may be used for the following purposes:
            </p>
            <ul>
                <li>To provide, operate, and maintain the Website.</li>
                <li>To improve, personalize, and expand the Website.</li>
                <li>To communicate with you, either directly or through one of our partners, including for customer service, updates, and other information related to the Website.</li>
                <li>To analyze and understand how users interact with the Website.</li>
            </ul>

            <h2>Cookies</h2>
            <p>
                The Website may use "cookies" to enhance your experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. Please note that some parts of the Website may not function properly if cookies are disabled.
            </p>

            <h2>Data Security</h2>
            <p>
                I am committed to protecting your personal information and have implemented appropriate technical and organizational measures to safeguard the data collected through this Website. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure, and I cannot guarantee absolute security.
            </p>

            <h2>Third-Party Services</h2>
            <p>
                I may use third-party services to help operate the Website or to provide services on my behalf. These third parties may have access to your personal information, but only to the extent necessary to perform these tasks on my behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2>Your Rights</h2>
            <p>
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or object to the processing of your data. If you wish to exercise any of these rights, please contact me directly.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
                I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective date." Your continued use of the Website after any changes indicates your acceptance of the new terms.
            </p>

            <h2>Contact Information</h2>
            <p>
                If you have any questions or concerns about this Privacy Policy or the handling of your personal information, please contact me at [Your Contact Information].
            </p>
        </PrivacyPolicyContainer>
    );
};

export default PrivacyPolicy;


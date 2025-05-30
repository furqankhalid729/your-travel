import React from "react";
import UserLayout from "../../Layout/UserLayout";

const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center px-4 py-8 bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-[1100px]">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Responsible Entity</h2>
          <p>The entity responsible for data processing is:</p>
          <address className="not-italic mb-2">
            <strong>ET SWISS AG</strong><br />
            Weihermattstrasse 75<br />
            5000 Aarau, Switzerland<br />
            Email: <a href="mailto:info@yourtrip24.com" className="text-blue-600">info@yourtrip24.com</a><br />
            Phone: <a href="tel:+41445237564" className="text-blue-600">+41 44 523 75 64</a>
          </address>
          <p>If you have any questions regarding data protection, you can contact us at any time.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Scope</h2>
          <p>
            This privacy policy applies to all personal data that we process as part of our business activities,
            especially when using our website, making bookings, submitting inquiries, or participating in marketing campaigns.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Collection and Processing of Personal Data</h2>
          <p>We collect and process the following categories of personal data:</p>
          <ul className="list-disc list-inside">
            <li>Contact and identification data: Name, address, email, phone number, date of birth, nationality</li>
            <li>Travel data: Travel destinations, booking details, passport information, visa details, preferences</li>
            <li>Payment data: Credit card information, billing address, transaction data</li>
            <li>Communication data: Emails, chat logs, inquiries</li>
            <li>Web data: IP address, browser information, cookies, usage behavior</li>
          </ul>
          <p>
            Data is collected either directly from you or through third parties (e.g., fellow travelers, partner companies).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Purpose of Data Processing</h2>
          <p>We process your data for the following purposes:</p>
          <ul className="list-disc list-inside">
            <li>Handling travel bookings and contracts</li>
            <li>Customer support and communication</li>
            <li>Compliance with legal obligations (e.g., registration duties)</li>
            <li>Marketing and personalized offers (only with your consent)</li>
            <li>Analysis and improvement of our services</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Legal Basis</h2>
          <p>The processing of your data is based on:</p>
          <ul className="list-disc list-inside">
            <li>Your consent (Art. 6 para. 1 lit. a GDPR)</li>
            <li>Contract fulfillment or pre-contractual measures (Art. 6 para. 1 lit. b GDPR)</li>
            <li>Compliance with legal obligations (Art. 6 para. 1 lit. c GDPR)</li>
            <li>Legitimate interests (Art. 6 para. 1 lit. f GDPR), provided your interests do not outweigh ours</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Data Disclosure and International Transfers</h2>
          <p>Your data will only be shared if necessary for the purposes mentioned above, for example, with:</p>
          <ul className="list-disc list-inside">
            <li>Service partners (e.g., airlines, hotels, travel operators)</li>
            <li>IT service providers and payment processors</li>
            <li>Authorities, if legally required</li>
          </ul>
          <p>
            Transfers to countries outside Switzerland or the EEA will only occur if an adequate level of data protection is ensured or appropriate safeguards exist (e.g., standard contractual clauses).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes mentioned above or as required by legal retention periods.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside">
            <li>Request information about the data we store about you</li>
            <li>Have incorrect data corrected</li>
            <li>Request deletion or restriction of your data, unless legal obligations prevent this</li>
            <li>Restrict the processing of your data</li>
            <li>Withdraw your consent at any time with future effect</li>
            <li>
              Receive your data in a structured, commonly used, and machine-readable format (data portability)
            </li>
            <li>File a complaint with a data protection supervisory authority</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Data Security</h2>
          <p>
            We implement technical and organizational security measures to protect your data against manipulation,
            loss, destruction, or unauthorized access.
          </p>
        </section>

        <section className="mb-0">
          <h2 className="text-2xl font-semibold mb-2">10. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to change this privacy policy at any time. The current version is available on our website.
          </p>
        </section>
      </div>
    </div>
  );
};

PrivacyPolicy.layout = page => <UserLayout children={page} title="Privacy Policy" />
export default PrivacyPolicy

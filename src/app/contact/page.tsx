import '@app/globals.css';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>Dr. Stephanie Skinner Family Dentistry</p>
      <p>10515 White Bluff Road, Savannah GA 31406</p>
      <p>Phone: <a href="tel:+19129256613">(912) 925-6613</a></p>
      <p>Email: <a href="mailto:skinnerdmd@comcast.net">skinnerdmd@comcast.net</a></p>
      {/* Add contact form and map here if needed */}
    </main>
  );
}

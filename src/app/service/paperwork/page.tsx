import '@app/globals.css';
import Link from 'next/link';

export default function PaperworkPage() {
  return (
    <main>
      <h1>Patient Paperwork</h1>
      <p>Please download and fill out the paperwork before your appointment.</p>
      <a href="/uploads/D1BD6oTB/NewPatientRegistrationForms.pdf" target="_blank" rel="noopener">Download Forms (PDF)</a>
    </main>
  );
}
